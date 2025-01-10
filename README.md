# **Weather App**  

This is a simple Weather App created using HTML, CSS, and JavaScript. It allows users to check the current weather conditions for a specific location based on their input or current geolocation.  

**Link to the Website:**   

---

### **Features**  
- **Current Weather:** Get real-time weather details, including temperature, humidity, wind speed, and weather conditions.  
- **Location Search:** Look up weather information by entering a location name or using the user's current location.  
- **Responsive Design:** The app is designed to work seamlessly on desktops, tablets, and mobile devices.  

---

### **Screenshots**  


---

### **Usage**  
1. Enter a location name in the search bar and press Enter or click the search button.  
2. View the displayed weather details, including temperature, humidity, wind speed, and weather status.  
3. To use the geolocation feature, allow location access when prompted.  

---

### **Technologies Used**  
- **HTML:** Provides the structure and layout of the app.  
- **CSS:** Enhances the design and responsiveness.  
- **JavaScript:** Handles API calls and dynamically updates the user interface.  

---

### **APIs Used**  
This Weather App utilizes the following API:  
- **OpenWeatherMap API:** Fetches real-time weather data. Sign up on [OpenWeatherMap](http://www.openweathermap.org) to obtain an API key.

---

### **Configuration**  

To configure and use the Weather App, follow these steps:  

1. **Sign Up for an API Key:**  
   - Visit the [OpenWeatherMap website](http://www.openweathermap.org).  
   - Create an account and generate an API key from your account dashboard.  

2. **Locate the Configuration File:**  
   - Open the project directory and navigate to the `script.js` file.  

3. **Update the API Key:**  
   - Find the `apiKey` variable in the script file.  
   - Replace `'YOUR_API_KEY'` with your actual API key:  
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```  

4. **Save Changes:**  
   - After updating the file, save the changes.  

5. **Launch the App:**  
   - Open the `index.html` file in your browser to start using the Weather App.  
