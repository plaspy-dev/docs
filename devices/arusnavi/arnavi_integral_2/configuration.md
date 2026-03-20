---
slug: /arusnavi/arnavi_integral_2/configuration
id: arnavi_integral_2-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi Integral 2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Arusnavi Arnavi Integral 2 with Plaspy server settings and practical setup steps
keywords:
  - Arusnavi Arnavi Integral 2 configuration
  - Arusnavi tracking setup
  - Arnavi Integral 2 Plaspy
  - Arnavi Integral 2 server configuration
  - Arnavi Integral 2 setup guide
  - Arnavi Integral 2 GPS tracker configuration
  - Arusnavi tracker Plaspy compatibility
  - Arnavi Integral 2 tracking platform setup
  - Arusnavi device configuration
  - Arnavi Integral 2 integration guide
---

# Arusnavi - Arnavi Integral 2 Configuration

This page covers the public configuration context for using the Arusnavi Arnavi Integral 2 tracker with the Plaspy platform. It explains the shared server settings Plaspy requires and provides practical configuration and validation guidance so you can prepare the device for visibility on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this page as a practical reference and confirm device specific steps with Arusnavi documentation when needed.

## Configuration Overview

Preparing the Arnavi Integral 2 for Plaspy focuses on pointing the device at the Plaspy server, choosing the correct transport, and verifying that the tracker is reporting as expected. The goal is reliable, continuous reporting to Plaspy so the device appears in the platform and sends events and location updates.

- Configure the tracker to send data to the Plaspy server endpoint.
- Select the correct transport method supported by the device and Plaspy.
- Save and apply settings on the device using the official Arusnavi configuration method.
- Restart or cycle power if the device requires it to start reporting.
- Validate connectivity and appearance of the device in Plaspy.

## Plaspy Server Settings

When configuring the Arnavi Integral 2 to communicate with Plaspy, use the following public server settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol once the device begins sending data to the server endpoint.

## Typical Requirements Before Setup

- Device powered and installed in its intended location with required connections made.
- Access to the official Arusnavi configuration method or vendor tool for the Arnavi Integral 2.
- Ability to supply the device with a working data connection according to the tracker installation.
- Knowledge of the device IMEI or unique identifier for platform registration and verification.
- Access to firmware version information so you can follow the correct setup steps for that release.
- Confirmation that you have the Plaspy server settings available for entry during configuration.

## How This Tracker Connects to Plaspy

The Arnavi Integral 2 is configured to report location and events to the shared Plaspy server endpoint and port. Once the device sends its initial packets to Plaspy, the platform will identify the tracker protocol automatically and begin processing data for display and monitoring.

- Device sends periodic location updates and event reports to d.plaspy.com or 54.85.159.138.
- Data is sent to port 8888 which is the common port Plaspy uses for all devices.
- You can choose UDP or TCP on the device if transport selection is required.
- Plaspy automatically detects the protocol and maps incoming data to the device record.
- Successful reports result in the tracker becoming visible and active in Plaspy.

## Common Configuration Workflow

1. Access the official Arusnavi configuration method or software for the Arnavi Integral 2.
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server field.
3. Set the destination port to 8888.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Apply or save the configuration within the manufacturer tool or device interface.
6. Restart or power cycle the device if required by the device to begin sending data.
7. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The exact commands or configuration syntax for the Arnavi Integral 2 vary by manufacturer tool, firmware, and installation method. Arusnavi devices are typically configured using the official Arusnavi configuration utility or the device web interface where available. Because there is no single universal command set published here, consult the Arusnavi configuration tool for the correct fields and commands. In general you will:

- Open the manufacturer configuration tool or interface.
- Find the server or host configuration section.
- Enter d.plaspy.com or 54.85.159.138 in the server field.
- Enter 8888 in the port field.
- Select UDP or TCP if applicable.
- Save and reboot the device.

If you receive a manufacturer supplied command list from Arusnavi, apply those commands in the order recommended by the vendor and preserve any placeholders provided in those commands.

## Configuration Notes

- Firmware and tool differences can change exact menu names, command formats, and field locations; always match steps to your device firmware.
- Choosing UDP vs TCP depends on device firmware support and local network conditions; either is acceptable because Plaspy supports both and auto-detects protocol.
- Plaspy uses the same port 8888 for all devices; do not change the port unless instructed by Plaspy support.
- Keep a record of the device IMEI or identifier so you can confirm the correct device in Plaspy after configuration.
- Review any vendor release notes before making changes to ensure the configuration flow matches your firmware version.

## Why Use Plaspy with This Configuration

Using the Arnavi Integral 2 with Plaspy provides a practical way to centralize tracking and monitoring for mobile assets. Pointing the device to Plaspy's shared server endpoint and port lets organizations receive location updates and event reporting in a single monitoring platform, simplifying fleet oversight and operational visibility.

To learn more about Plaspy and how it handles device connectivity and tracking, visit https://www.plaspy.com. For the most current device specific setup details, firmware information, and manufacturer guidance refer to the official Arusnavi website https://www.arusnavi.ru. Manufacturer specifications and setup methods can change over time, so verify the latest instructions on the Arusnavi site when configuring your device.
