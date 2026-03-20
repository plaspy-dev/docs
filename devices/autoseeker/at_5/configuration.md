---
slug: /autoseeker/at_5/configuration
id: at_5-configuration
sidebar_label: Configuration
title: Autoseeker - AT-5 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Autoseeker AT-5 use with Plaspy including shared server settings and practical setup steps
keywords:
  - Autoseeker AT-5 configuration
  - Autoseeker AT-5 setup
  - Autoseeker AT-5 Plaspy
  - AT-5 server configuration
  - AT-5 GPS tracker setup
  - Autoseeker tracker configuration
  - AT-5 tracking software configuration
  - Autoseeker GPS platform setup
  - AT-5 device configuration guide
  - Plaspy compatible trackers
---

# Autoseeker - AT-5 Configuration

This page covers the public configuration context for using the Autoseeker AT-5 wireless magnetic GPS asset tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, the typical setup workflow, and practical considerations you should check before integrating the AT-5 into the Plaspy platform. The guidance here is based on the AT-5 feature set including 4G network compatibility and multi mode positioning capabilities.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, however manufacturer side setup steps and the available configuration interfaces can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page to understand the public Plaspy settings and common steps, and consult Autoseeker documentation for device specific configuration tools and exact command formats.

## Configuration Overview

The goal of configuration is to prepare the AT-5 so it reliably communicates with Plaspy and appears in the platform for monitoring and event reporting. This involves setting the tracker network target, transport type, and any device options required for your deployment, then validating that the tracker successfully reports to Plaspy.

- Point the device at the shared Plaspy server endpoint and port so telemetry is delivered to the platform.
- Choose the appropriate transport type if the AT-5 requires a TCP or UDP selection.
- Verify mobile network connectivity and that the device has an active SIM and cellular data where applicable.
- Apply or save changes and restart the device when the manufacturer workflow requires it.
- Confirm the device is visible and reporting events in Plaspy after configuration.

## Plaspy Server Settings

Set the AT-5 to report to the Plaspy server using these public values:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint and port you should use when configuring the AT-5 to send its location and status updates to the platform.

## Typical Requirements Before Setup

- Ensure the AT-5 battery is charged and the device is powered on.
- Confirm an active SIM with mobile data is installed if the unit requires cellular connectivity for 4G operation.
- Have physical access to the device or a supported manufacturer configuration tool or app.
- Obtain the official Autoseeker configuration method or software for your device firmware version.
- Validate there is cellular coverage at the installation location for the required network bands.
- Prepare your Plaspy account or platform access so you can validate device reporting after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AT-5 sends location and event data to the shared Plaspy server endpoint and port so the device is visible and manageable within the platform. Plaspy receives the incoming telemetry, automatically recognizes the tracker protocol, and associates the device with your account or installation context.

- Tracker reports GPS and supplementary positioning data to the Plaspy server d.plaspy.com at port 8888
- Transport can be UDP or TCP depending on device configuration; ensure the selected transport matches the device setting
- Plaspy automatically detects the tracker protocol so no protocol selection is required in the platform
- Events such as SOS, tamper or low battery will be forwarded to Plaspy when enabled on the tracker
- Successful connection and periodic reporting provide visibility for operational monitoring and alerts

## Common Configuration Workflow

1. Access the official Autoseeker configuration method or software appropriate for the AT-5 firmware and hardware revision.
2. In the device server or network settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the remote port to 8888 as this is the Plaspy port used for all supported devices.
4. If the AT-5 requires a transport selection choose UDP or TCP on port 8888 according to the device interface.
5. Apply or save the configuration changes in the device tool or by following the manufacturer instructions.
6. Restart the device if the manufacturer documentation indicates a reboot is required for settings to take effect.
7. Validate that the device reports to Plaspy by checking for incoming telemetry on the platform and confirming the device appears in your Plaspy account.

## Example Configuration Commands

The exact configuration commands and formats depend on the Autoseeker configuration tool, firmware, or SMS commands supported by your AT-5 unit. Manufacturer tools often provide a GUI or SMS/AT style commands to set server, port, and transport. Because methods vary, refer to Autoseeker documentation or the device configuration utility supplied with your unit for precise commands and examples.

## Configuration Notes

- Firmware differences can change available options and the exact configuration workflow. Check the AT-5 firmware version before applying instructions.
- Some installers use the device manufacturer app or desktop tool while others use SMS or serial configuration; follow the method supported by your unit.
- Choosing UDP or TCP can affect how data is delivered; test the selected transport to confirm reliable reporting to the Plaspy server.
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol so you do not need a custom port per device.
- Keep a record of device IMEI and identification information to match the tracker in Plaspy after the device starts reporting.

## Why Use Plaspy with This Configuration

Using the Autoseeker AT-5 with Plaspy provides a straightforward way to centralize location, event, and status data from magnetic asset trackers into a single monitoring platform. The AT-5's long lasting battery, multi mode positioning, and security related alarms make it suitable for asset and vehicle visibility, and configuring it to report to Plaspy enables consistent tracking, alerting, and operational oversight.

Learn more about Plaspy and how it handles device telemetry and fleet visibility on the main website https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify setup guidance on the Autoseeker official website https://autoseekergps.com/ as device features and setup steps can change over time.
