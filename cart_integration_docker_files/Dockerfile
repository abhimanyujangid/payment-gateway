# Use the official .NET Core SDK image for building the application
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Copy the solution file and restore dependencies
COPY *.sln ./
COPY ShoppingCart.Core/*.csproj ./ShoppingCart.Core/
COPY ShoppingCart.Client/*.csproj ./ShoppingCart.Client/
RUN dotnet restore

# Copy the rest of the project files
COPY ShoppingCart.Core/. ./ShoppingCart.Core/
COPY ShoppingCart.Client/. ./ShoppingCart.Client/

# Build the application
WORKDIR /app/ShoppingCart.Client
RUN dotnet build -c Release

# Publish the application
RUN dotnet publish -c Release -o out

# Use the official .NET Core runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/ShoppingCart.Client/out .
ENTRYPOINT ["dotnet", "ShoppingCart.Client.dll"]
