---
slug: /gotop/vt_393/configuration
id: vt_393-configuration
sidebar_label: Configuration
title: GOTOP - VT-393 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GOTOP VT-393 GPS tracker configuration with Plaspy server settings and practical integration steps
keywords:
  - GOTOP VT-393 configuration
  - GOTOP VT-393 setup
  - GOTOP VT-393 Plaspy
  - GOTOP GPS tracker configuration
  - VT-393 server configuration
  - VT-393 setup guide
  - GOTOP vehicle tracker setup
  - GPS tracker Plaspy integration
  - fleet tracking VT-393
  - VT-393 configuration guide
---

# GOTOP - VT-393 Configuration

This page covers the public configuration context for using the GOTOP VT-393 tracker with the Plaspy platform. It summarizes the practical server settings and the typical steps needed to point a VT-393 device to Plaspy so the device can report location and event data to your Plaspy account. The content is focused on public configuration details and general installer guidance rather than internal or proprietary manufacturer procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you use. The VT-393 supports features such as GPRS and SMS reporting, OTA updates, camera integration, SD card storage, and multiple I O options, so follow manufacturer guidance when applying any device specific settings.

## Configuration Overview

This configuration process prepares a VT-393 unit to communicate with Plaspy by pointing its reporting endpoint to the Plaspy server and validating connectivity. The goal is to ensure the tracker sends position, alerts, and status updates so the device becomes visible and manageable from the Plaspy platform.

- Configure the VT-393 to report to the Plaspy server endpoint and port.
- Validate mobile data or SMS connectivity so the device can transmit data.
- Confirm the transport protocol selection and save the device settings.
- Verify the device appears and reports correctly in Plaspy after reboot.
- Ensure optional features like camera logging and SD storage are working as expected for your installation.

## Plaspy Server Settings

When configuring the VT-393 to work with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Include these exact values when entering the device reporting endpoint or when creating a server entry in your manufacturer tool.

## Typical Requirements Before Setup

- A powered and functioning VT-393 unit with the correct firmware for your deployment.
- A valid SIM card and mobile data plan if you intend to use GPRS reporting, or SMS capability if you configure SMS-based reporting.
- Access to the official GOTOP configuration tool or the manufacturer recommended setup method for the VT-393.
- Knowledge of the device APN and any mobile operator credentials needed for GPRS connectivity.
- Optional: SD card installed and formatted if you will use onboard storage for pictures and logs.
- Access to the vehicle and ability to safely reboot or power cycle the tracker during configuration.

## How This Tracker Connects to Plaspy

The VT-393 can send location, status, and event data to Plaspy by reporting to the shared Plaspy server endpoint and port. Plaspy receives the tracker data, performs protocol detection, and makes the device data available in the Plaspy platform for tracking, alerts, and reporting.

- The tracker is configured to report to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- You can select UDP or TCP as the transport if the device firmware requires a transport choice.
- Plaspy automatically detects the tracker protocol so you only need to point the device to the correct server and port.
- Once reporting is active, Plaspy will display location updates and event notifications from the VT-393.
- Use Plaspy to monitor alerts such as SOS, geofence, overspeed, and other supported events the device reports.

## Common Configuration Workflow

1. Access the official GOTOP VT-393 configuration method or software provided by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server or IP field.
3. Set the device reporting port to 8888, noting that Plaspy uses the same port for all devices.
4. Choose UDP or TCP for transport if the device requires an explicit selection.
5. Configure APN and mobile data settings so the unit can connect via GPRS or ensure SMS settings are available if using SMS reporting.
6. Apply or save the configuration in the manufacturer tool and, if required, restart the VT-393.
7. Validate that the device reports to Plaspy and that it appears in the platform with recent position and status updates.

## Example Configuration Commands

The VT-393 manufacturer provides multiple configuration methods and the exact command set or GUI options can differ by firmware and vendor tool. Because model specific commands and formats vary, use GOTOP official documentation or the vendor tool to send configuration commands. Typical actions you will perform in the tool include setting the server domain or IP and the port, selecting transport, and saving the configuration.

If your installer guide or firmware documentation provides SMS or serial commands for server configuration, follow those commands precisely. Plaspy requires the server endpoint and port shown in this document: d.plaspy.com or 54.85.159.138 and port 8888. The exact command text is manufacturer dependent and should be taken from GOTOP VT-393 documentation.

## Configuration Notes

- Firmware differences can change the configuration workflow or available menu names; always confirm the firmware version before applying steps.
- Choosing TCP versus UDP may affect delivery characteristics; pick the transport required by your operational needs and the options supported by the device firmware.
- If you use GPRS, verify APN settings and operator credentials so the VT-393 can establish a mobile data session.
- OTA update capability requires GPRS connectivity and correct server/APN settings; use OTA only when recommended by the manufacturer.
- For features like camera logging and SD storage, confirm file sizes and storage behavior to align with your retention and retrieval requirements.

## Why Use Plaspy with This Configuration

Configuring the GOTOP VT-393 to report to Plaspy gives organizations consolidated visibility into vehicle location, alerts, and operational events through a single platform. The VT-393's support for camera logging, multiple inputs, and OTA updates makes it a flexible tracker for fleet monitoring, while Plaspy's shared server approach simplifies device onboarding by using consistent server settings.

Learn more about Plaspy and how it integrates with devices like the GOTOP VT-393 at https://www.plaspy.com. For the most current and device specific setup details, firmware notes, and configuration commands, verify information on the manufacturer website https://www.gotop.cc/ as vendor documentation and firmware behavior can change over time.
