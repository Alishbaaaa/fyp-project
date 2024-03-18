import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException

def perform_analysis(url):
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(options=chrome_options)
    
    # Use WebDriverWait to wait until the page is loaded
    wait = WebDriverWait(driver, 20)
    driver.get(url)
    

    images = driver.find_elements(By.TAG_NAME, "img")
    form_elements = driver.find_elements(By.TAG_NAME, "form")
    navigation_tabs = driver.find_elements(By.XPATH, "//nav//a")
    module_tabs = driver.find_elements(By.XPATH, "//div[@class='module-tab']/a")
    tooltips = driver.find_elements(By.XPATH, "//div[@class='tooltip']")
    autocomplete_fields = driver.find_elements(By.XPATH, "//input[@autocomplete]")
    analysis_result = []


    try:
        # Explicitly wait for the presence of the title element
        title_element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "title")))
        title_text = title_element.get_attribute("text").strip()
        analysis_result.append(f"Title: {title_text}")
    except NoSuchElementException:
        analysis_result.append("Title not found on the webpage.")
    
    #check for alt text in images
    alt_text_found = any(img.get_attribute("alt") for img in images)

    if alt_text_found:
        analysis_result.append("Alt text is present")
    else:
        analysis_result.append("No Alt text is found")


    
    # Check Autocomplete
    autocomplete_fields = driver.find_elements(By.XPATH, "//input[@autocomplete]")
    if any(autocomplete_fields):
        analysis_result.append("Autocomplete element is present")
    else:
        analysis_result.append("No Autocomplete element found")

    # Language selector 
    try:
        # Check if there are elements related to language
        language_elements = driver.find_elements(By.XPATH, "//*[contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language') or contains(translate(@class, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language') or contains(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), 'language')]")

        if language_elements:
            analysis_result.append("Language-related elements are present.")
            # for element in language_elements:
            #     analysis_result.append(f"- {element.text}")
        else:
            analysis_result.append("No language-related elements found.")

    except Exception as e:
        analysis_result.append(f"Error: {str(e)}")


    #Responsive design
    # Get the width of the body element
    body_width = driver.find_element(By.TAG_NAME, 'body').size['width']

    # Define thresholds for different devices
    mobile_threshold = 480  # Example: width less than 480 pixels for mobile
    tablet_threshold = 768  # Example: width between 481 and 768 pixels for tablet
    desktop_threshold = 1024  # Example: width greater than 768 pixels for desktop

    # Check the width and determine the device type
    if body_width < mobile_threshold:
        analysis_result.append("Optimized for mobile.")
    elif mobile_threshold <= body_width < tablet_threshold:
        analysis_result.append("Optimized for tablet.")
    elif tablet_threshold <= body_width < desktop_threshold:
        analysis_result.append("Optimized for desktop.")
    else:
        analysis_result.append("Optimized for larger screens (potentially desktop).")

    # Check for search input fields with id or class containing "search"
    search_input_fields = driver.find_elements(By.XPATH, "//input[contains(@id, 'search') or contains(@class, 'search')]")

    # Check for search input fields with id or class containing "search"
    search_fields = driver.find_elements(By.XPATH, "//div[contains(@id, 'search') or contains(@class, 'search')]")

    if search_input_fields or search_fields:
        analysis_result.append("Search functionality found on the website.")
    else:
        analysis_result.append("No search functionality found on the website.")




    # # Keyboard navigation
    # body = driver.find_element("tag name", "body")
    # body.send_keys(Keys.ARROW_DOWN)
    # response_element = driver.find_elements(By.XPATH, "//div[@class='response-element']")
    # if response_element:
    #     analysis_result.append("Keyboard navigation is supported on the website.")
    # else:
    #     analysis_result.append("Keyboard navigation is not supported on the website.")

    # Check for link to home within a div with class "logo" or id "logo"
    # Check for link to home within a div with class "logo" or id "logo"
    try:
        home_link = driver.find_element(By.XPATH, "(//div[contains(@class, 'logo') or contains(@id, 'logo')]//a[@href])")
        analysis_result.append("Link to Home is present.")
    except NoSuchElementException:
        analysis_result.append("No Link to Home is present.")



    # Check navigation tabs in any of the specified ways
    navigation_tabs = driver.find_elements(By.XPATH, "//nav//a")

    # Check navigation tabs with text
    navigation_tabs_with_text = any(tab.text for tab in navigation_tabs)

    # Check navigation tabs with class name containing "nav" or within a <nav> tag
    try:
        navigation_tab_with_class = driver.find_element(By.XPATH, "//a[contains(@class, 'nav')]")
    except Exception:
        navigation_tab_with_class = None

    # Check if navigation tabs are present in any of the specified ways
    if navigation_tabs_with_text or navigation_tab_with_class:
        analysis_result.append("Navigation tab is present.")
    else:
        analysis_result.append("No Navigation tab is present.")

    # Check if footer contains any <a> elements with href attributes
    try:
        footer = driver.find_element(By.TAG_NAME, "footer")
        footer_links = footer.find_elements(By.XPATH, ".//a[@href]")
        analysis_result.append("Footer contains links.")
    except NoSuchElementException:
        try:
            footer_fields = driver.find_elements(By.XPATH, "//div[contains(@id, 'Footer') or contains(@class, 'Footer')]")
            analysis_result.append("Footer contains links.")
        except NoSuchElementException:
            analysis_result.append("No Footer found on the webpage.")



    driver.quit()

    # Convert the list to a JSON-formatted string
    analysis_result_json = json.dumps(analysis_result)

    return analysis_result_json

# alt text
# form validation
# error messages
# navigation tabs
# Module Tabs
# Tooltips
# Autocomplete
# confirmation prompts
# Home link 
# Language selector
# breadcrumbs
# Responsive design
# Search input fields
# Readable Font and Contrast
# Keyboard navigation