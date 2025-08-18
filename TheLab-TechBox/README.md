# TheLab-TechBox Project - Source Files

This branch contains the complete source code for the TheLab-TechBox Blazor WebAssembly project.

## Project Structure
- **TheLab-TechBox/**: Main project directory with all Blazor components
- **wwwroot/**: Static assets (images, CSS, JavaScript)
- **Pages/**: Razor pages (Home, About, Services, Contact)
- **Shared/**: Shared Razor components
- **Layout/**: Layout components (MainLayout, NavMenu)

## Custom Domain Configuration
This project is configured for deployment to custom domain `thelabtechbox.gr`:
- Base href set to `/` (root)
- All navigation paths use root-relative URLs
- Image paths updated for proper loading
- Service navigation links configured for single-page app routing

## Deployment
- **Deploy Branch**: Contains built files ready for GitHub Pages
- **Files Branch**: Contains this source code
- **Main Branch**: Development branch

## Technologies Used
- Blazor WebAssembly (.NET 9.0)
- Bootstrap 5
- Custom CSS
- Responsive design
- JavaScript interop for gallery functionality

## Build Instructions
1. `dotnet restore`
2. `dotnet build`
3. `dotnet publish -c Release` (for production)

## Custom Domain Deployment
The project is pre-configured for `thelabtechbox.gr` with all paths optimized for root deployment.
