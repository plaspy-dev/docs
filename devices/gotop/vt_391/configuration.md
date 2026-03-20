---
slug: /gotop/vt_391/configuration
id: vt_391-configuration
sidebar_label: Configuration
title: GOTOP - VT-391 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP VT-391 showing how to connect the tracker to Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP VT-391
  - GOTOP VT-391 configuration
  - GOTOP VT-391 setup
  - VT-391 Plaspy setup
  - VT-391 server configuration
  - GOTOP GPS tracker configuration
  - vehicle tracking VT-391
  - VT-391 WiFi tracker setup
  - fleet tracking GOTOP VT-391
  - VT-391 RFID driver identification
---

# GOTOP - VT-391 Configuration

This page covers the public configuration context for using the GOTOP VT-391 tracker with Plaspy. It summarizes the practical settings you need to apply so the VT-391 can report location and device data to Plaspy. The VT-391 description used here includes its WiFi capability, camera support, RFID driver identification, SD card storage, two way audio, analog and digital inputs, and support for reporting via GPRS SMS and WiFi.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. This page focuses on the public Plaspy server values and a practical workflow for configuring a VT-391 for visibility in the Plaspy platform while recommending that you check GOTOP documentation for firmware specific commands.

## Configuration Overview

Preparing the VT-391 for use with Plaspy involves applying the shared Plaspy server endpoint and transport settings and then validating that the tracker can reach the platform. The goal is to ensure the device sends its GPS/WiFi location reports and events to Plaspy reliably so the device appears in the platform and reports alarms and telemetry.

- Configure the tracker to send data to the Plaspy server endpoint d.plaspy.com or the equivalent IP address.
- Set the device port to the Plaspy port so the platform receives tracker packets.
- Choose UDP or TCP transport on the VT-391 if the device requires a transport selection.
- Validate connectivity so the VT-391 appears in Plaspy and reports status and events.
- If using WiFi or GPRS, confirm network credentials and SIM data connectivity as applicable.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Use these exact values when entering the server endpoint in the VT-391 configuration tool or manufacturer interface. Plaspy's automatic protocol detection means you normally only need to point the tracker to the domain or IP and set the port and transport.

## Typical Requirements Before Setup

- Confirm the VT-391 has power and is installed or temporarily powered for configuration.
- Have access to the official GOTOP configuration method or software used for this model.
- If using cellular reporting, ensure a data capable SIM is installed and active for GPRS reporting.
- If using WiFi reporting, have SSID and password credentials ready and verify WiFi availability.
- Know the device IMEI or unique identifier so you can match the physical unit to Plaspy once reporting begins.
- Check the device firmware version and note that configuration options may differ by firmware release.

## How This Tracker Connects to Plaspy

The VT-391 sends location and device events to the shared Plaspy server endpoint on port 8888 using either UDP or TCP according to the device configuration. Once the tracker is pointed at Plaspy and the transport is selected, Plaspy will detect the tracker protocol and parse incoming messages so the device becomes visible in the platform.

- The tracker reports periodic GPS or WiFi based location updates to d.plaspy.com or 54.85.159.138.
- Events such as SOS, geo fence, overspeed, and harsh driving are sent to the same Plaspy endpoint and port.
- Plaspy automatically detects the protocol used by the VT-391 and ingests messages without requiring distinct server ports per device.
- Network transport can be UDP or TCP depending on device settings and network reliability considerations.
- After successful configuration, Plaspy shows device telemetry and event history for monitoring and fleet management.

## Common Configuration Workflow

1. Access the official GOTOP VT-391 configuration method or software provided by the manufacturer or vendor.  
2. In the server settings enter the Plaspy server domain d.plaspy.com or the IP 54.85.159.138.  
3. Set the device port to 8888 to match Plaspy server port.  
4. Choose UDP or TCP transport if the device requires you to select a transport mode.  
5. Apply or save the configuration in the device tool or via the device interface.  
6. Restart the VT-391 if required by the manufacturer to apply new network settings.  
7. Validate that the device reports to Plaspy by checking device presence and recent messages in the platform.

Follow the vendor instructions for each step, and keep device identifiers handy when matching reported devices in Plaspy.

## Example Configuration Commands

The VT-391 manufacturer may provide SMS, serial, or software based commands for server and network configuration. No specific public command set for this model is provided in this page. The exact command format and method can vary by firmware and vendor tool, so use the GOTOP configuration utility or documentation to send server settings.

When configuring, use the Plaspy values shown above:
- Server domain d.plaspy.com or IP 54.85.159.138
- Port 8888
- Transport UDP or TCP

If you obtain GOTOP command examples from official documentation or vendor tools, apply them in the order the manufacturer recommends and preserve placeholders such as APN, username, or password where required.

## Configuration Notes

- Firmware differences may change the available configuration options and command syntax. Always check the VT-391 firmware release notes before applying settings.
- Choose UDP for lower overhead and potential packet loss tolerance, or TCP for a connection oriented approach when the device supports both transports.
- Use WiFi configuration for sites with reliable wireless access and cellular GPRS for wide area coverage. Ensure SIM data service is active for GPRS reporting.
- Camera, SD card logging, and RFID features are managed through GOTOP specific settings; these do not change the Plaspy server endpoint but may affect data volume and reporting behavior.
- OTA firmware updates can change configuration workflows; confirm update support with the manufacturer.

## Why Use Plaspy with This Configuration

Using Plaspy with a GOTOP VT-391 configured to send data to d.plaspy.com on port 8888 gives organizations a consistent platform for fleet visibility, alarm monitoring, and operational oversight. The VT-391's WiFi capability, camera support, and rich I O interfaces make it a flexible device for mixed connectivity environments while Plaspy handles incoming messages from the device and presents them for monitoring and analysis.

Learn more about Plaspy at https://www.plaspy.com and verify any device specific configuration details or firmware instructions with the manufacturer at https://www.gotop.cc/. Manufacturer specifications and setup steps can change over time so always confirm the latest instructions on the official GOTOP site.
