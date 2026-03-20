---
slug: /dct/syrus_gps/configuration
id: syrus_gps-configuration
sidebar_label: Configuration
title: DCT - Syrus GPS Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the DCT Syrus GPS tracker to Plaspy with example commands and server settings
keywords:
  - DCT Syrus GPS configuration
  - Syrus GPS setup for Plaspy
  - Syrus GPS server configuration
  - Syrus GPS tracking software configuration
  - Syrus GPS platform setup
  - GPS tracker configuration guide
  - vehicle tracking Syrus GPS
  - Syrus Desk configuration script
  - Plaspy tracker settings
  - Syrus GPS APN configuration
---

# DCT - Syrus GPS Configuration

This page covers the public configuration context for using the DCT Syrus GPS tracker with Plaspy. It focuses on the shared server settings Plaspy requires and shows how to apply those settings using public Syrus configuration content. Use this guide to prepare the device so Plaspy can receive location and event data from the tracker.

Plaspy uses shared server values across supported devices and automatically detects the tracker protocol when the device reports. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools such as Syrus Desk. The example script below is a public Syrus SB script intended to be used as a starting point and loaded with Syrus Desk where applicable.

## Configuration Overview

This configuration process prepares the Syrus GPS to communicate reliably with Plaspy by setting the device APN details, assigning the Plaspy server endpoint, and enabling reporting events that Plaspy can display and analyze.

- Provide the tracker with valid network access information so it can reach Plaspy
- Point the tracker to Plaspy server settings so inbound data arrives at the correct endpoint
- Enable common event reporting so vehicle and motion events appear in Plaspy
- Validate connectivity so the device becomes visible in the Plaspy platform

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible Syrus GPS device installed or on a bench for initial configuration
- Access to the Syrus Desk or other DCT official configuration tool to load scripts or send SB commands
- A working SIM card and mobile data connectivity with APN credentials if using cellular data (placeholders are used in the example script)
- Basic knowledge of saving and uploading a .tmf script into Syrus Desk or sending SB commands directly
- Administrative access to Plaspy so you can verify the device appears after configuration
- Confirmation of the device firmware version and any vendor-specific notes that may affect command syntax

## How This Tracker Connects to Plaspy

The Syrus GPS is configured to send AVL and event data to Plaspy by targeting the shared Plaspy server endpoint and port. Once the device has network access and the server/port are set, Plaspy will automatically detect the protocol and ingest reports from the tracker.

- Device uses configured APN and mobile network to reach Plaspy
- Tracker is pointed to the Plaspy server endpoint d.plaspy.com or the equivalent IP address
- Data is sent over port 8888 using UDP or TCP depending on your selection
- Plaspy detects the protocol automatically and associates incoming reports with the device account
- Event reporting configured on the device triggers visibility and alerts in Plaspy

## Common Configuration Workflow

1. Access the official DCT Syrus configuration method such as Syrus Desk or the supported SB command interface.  
2. Enter the Plaspy server address using d.plaspy.com or the IP address 54.85.159.138 in the remote server setting.  
3. Set the remote port to 8888. Plaspy uses the same port for all devices.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Configure APN details and any required credentials for mobile data connectivity.  
6. Apply or save the configuration and upload the script to the device.  
7. Restart the device if required by the tool or the device firmware.  
8. Validate that the device is reporting to Plaspy and visible in the platform.

## Example Configuration Commands

You can copy and paste this script to a new empty text file, save it with a .tmf extension, and load it with Syrus Desk. The script below is a public example showing initial setup, APN placeholders, and the Plaspy server destination. Preserve the placeholders when you replace them with real APN values.

Full example Syrus SB script (.tmf)
```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Key command notes and individual lines
- Optional initial step to clear previous config
```
>SRT;CONFIG<
```
- Unlock or prepare adapter settings (tool specific)
```
>SXADP**U<
```
- APN settings with placeholders
```
>SRFA{{apn}}<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
```
  - {{apn}} is the network APN string for your SIM provider  
  - {{apnu}} is the APN username if required by the carrier  
  - {{apnp}} is the APN password if required by the carrier
- Point device to the Plaspy server and port
```
>SXADP0000d.plaspy.com;8888<
```
- Define destination address and basic event/report definitions
```
>SDA4;P00<
>STD80300<
>SED37NV4;TD8+<
>SED05NV4;IP3+<
```

Note: The exact command set and sequence may vary slightly by Syrus firmware or Syrus Desk version. Use these lines as a reference and consult manufacturer tools when saving and uploading the .tmf script.

## Configuration Notes

- Firmware differences can change command availability and syntax. Verify the correct command set for your device firmware before saving scripts.  
- Choose UDP or TCP based on network conditions and your organization policies; both transports are supported by Plaspy on port 8888.  
- The example script uses APN placeholders; replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier values before uploading.  
- Syrus Desk is commonly used to load .tmf scripts but follow DCT instructions for your exact toolchain.  
- Backup satellite communication and PEGASUS Gateway OTA configuration are part of the Syrus product ecosystem and may require additional accessories or vendor tools.

## Why Use Plaspy with This Configuration

Configuring the DCT Syrus GPS to report to Plaspy gives organizations a straightforward path to capture location, motion events, and basic telematic signals in a single platform. Using the shared Plaspy server settings simplifies deployment across a mixed fleet because all supported devices report to the same Plaspy port and the platform handles protocol detection automatically.

For step by step details and account setup, learn more about Plaspy at https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and accessory requirements consult the manufacturer site at https://www.digitalcomtech.com/ for accuracy and updates.
