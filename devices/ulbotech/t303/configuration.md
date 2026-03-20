---
slug: /ulbotech/t303/configuration
id: t303-configuration
sidebar_label: Configuration
title: Ulbotech - T303 Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for Ulbotech T303 GPS tracker with Plaspy including server settings and practical setup steps
keywords:
  - Ulbotech T303 configuration
  - Ulbotech T303 setup
  - T303 Plaspy configuration
  - Ulbotech GPS tracker setup
  - T303 server configuration
  - Ulbotech T303 tracking software
  - T303 GPS platform setup
  - Plaspy tracker configuration
  - fleet tracking T303
  - vehicle tracker T303
---

# Ulbotech - T303 Configuration

This page covers the public configuration context for using the Ulbotech T303 tracker with Plaspy. It summarizes the practical server settings, typical prerequisites, and a straightforward workflow to prepare the T303 for real time tracking, geo fencing, immobilization control and telemetry reporting into Plaspy. The content is based on publicly available product details and the shared Plaspy connection requirements.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to apply the Plaspy endpoint and port to the T303 using Ulbotech configuration tools and then verify the device is reporting correctly in Plaspy.

## Configuration Overview

The goal of configuration is to direct the T303 to send GNSS positions and telemetry to Plaspy so the device is visible and actionable in your Plaspy account. Configuration focuses on setting the server endpoint and transport, confirming cellular connectivity and APN, and validating that events and location updates arrive at Plaspy.

- Set the Plaspy server endpoint and port on the device or via the Ulbotech configuration tool.
- Verify the T303 has a working SIM and GPRS connectivity and that APN settings are correct.
- Choose transport (UDP or TCP) if the device configuration requires a selection and save the changes.
- Restart or power cycle the device where required to apply settings.
- Confirm the device appears and streams location data inside Plaspy.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the T303. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

When applying settings on the T303, you may enter either the domain d.plaspy.com or the IP 54.85.159.138; both point to the same Plaspy ingestion endpoint on port 8888.

## Typical Requirements Before Setup

- A powered and installed T303 unit with access to the device configuration interface or Ulbotech configuration software.
- A valid cellular SIM provisioned for GPRS data if using GPRS for connectivity; confirm data allowance and APN credentials.
- Knowledge of the device APN values if automatic APN is not available or needs manual entry.
- Access to the official Ulbotech configuration method for the T303 (software, USB, SMS commands, or web tool as provided by the vendor).
- A Plaspy account and/or information from your Plaspy administrator to confirm device visibility after configuration.
- Basic tools to apply and, if needed, power cycle or restart the device after configuration changes.

## How This Tracker Connects to Plaspy

The T303 transmits GNSS fixes and telemetry over GPRS to Plaspy using the shared Plaspy ingestion endpoint and port. Plaspy ingests that data stream, applies rules, and surfaces real time location, alarms and reports for fleet management and anti theft workflows.

- The T303 is configured to report to the shared Plaspy endpoint at d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP depending on device configuration; the device may be set to either on port 8888.
- Plaspy automatically detects the tracker protocol and maps incoming data to the correct device in the platform.
- Reported events typically include position fixes, ACC and ignition status, SOS alerts, geo fence breaches and digital output state for immobilization.
- Once connected, telemetry such as sensor inputs and driver behaviour events become visible in the Plaspy dashboard for monitoring and reporting.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T303 according to the manufacturer instructions.
2. In the device server settings enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP transport if the T303 configuration requires a transport selection.
5. Enter APN credentials or confirm auto APN is enabled so the device can establish GPRS data connectivity.
6. Apply or save the configuration changes in the device tool or via the manufacturer supported method.
7. Restart or power cycle the device if required to make the settings active.
8. Validate that the device reports to Plaspy and that location and events appear in the platform.

## Example Configuration Commands

The exact configuration commands and the method to send them depend on Ulbotech tools and the device firmware. Some installations use a USB tool, a manufacturer desktop application, or SMS command strings. Because manufacturer tools and firmware versions vary, follow the official Ulbotech configuration guide for specific commands and syntax. If your installation method supports SMS or command line configuration, apply the Plaspy endpoint (d.plaspy.com or 54.85.159.138) and port 8888 exactly as shown in the device tool.

If you have an Ulbotech command list from the vendor, apply the server domain or IP and port in the same order recommended by Ulbotech, then save and restart the device. Preserve any placeholders from manufacturer examples such as {{apn}} or {{apnu}} and replace them with your SIM operator values when instructed.

## Configuration Notes

- Firmware differences can change available menu items and exact field names; consult the T303 firmware release notes if a setting is not where expected.
- If the device offers both UDP and TCP, UDP is commonly used for lower overhead but TCP may be selected when a reliable session is preferred; Plaspy accepts either on port 8888.
- The T303 supports auto APN and FOTA but confirm APN behavior in your firmware to avoid connectivity gaps.
- Use the manufacturer configuration interface to save changes and follow any recommended restart or reboot procedure.
- Always verify device visibility in Plaspy after configuration to confirm events, position updates and telemetry are arriving.

## Why Use Plaspy with This Configuration

Using the Ulbotech T303 with Plaspy provides organizations with centralized visibility of vehicle location, driver behaviour events and device telemetry. The combination of the T303’s GNSS and telemetry capabilities and Plaspy’s platform features helps fleets reduce theft risk, improve operational monitoring, and act on safety alerts in real time.

To learn more about Plaspy and how the platform can integrate with fleet devices like the T303 visit https://www.plaspy.com. Please verify manufacturer specific configuration methods, firmware behavior and product details with Ulbotech at http://www.ulbotech.com/ as device setup steps and firmware features can change over time.
