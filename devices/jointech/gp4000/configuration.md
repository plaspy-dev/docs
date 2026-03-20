---
slug: /jointech/gp4000/configuration
id: gp4000-configuration
sidebar_label: Configuration
title: Jointech - GP4000 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech GP4000 integration with Plaspy including server settings APN SMS commands and setup workflow
keywords:
  - Jointech GP4000 configuration
  - Jointech GP4000 setup
  - GP4000 Plaspy configuration
  - Jointech GP4000 server configuration
  - GP4000 GPS tracker setup
  - Jointech tracker configuration
  - GP4000 tracking software configuration
  - Jointech GP4000 APN setup
  - GPS tracker Plaspy integration
  - Vehicle tracking GP4000
---

# Jointech - GP4000 Configuration

This page provides public configuration context for using the Jointech GP4000 tracker with Plaspy. It explains the shared server settings Plaspy requires, describes the typical setup flow, and includes the public SMS commands that manufacturers commonly publish for GPRS and APN configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps for configuring a GP4000 can vary with firmware version, hardware revision, installation type, and vendor tools, so treat the examples here as practical, public guidance and confirm device specific details with the manufacturer when necessary.

## Configuration Overview

This section summarizes what you need to prepare the GP4000 for communication with Plaspy and to validate the device is visible in the platform.

- Configure the device to report to the Plaspy server endpoint so location and event data arrive in the platform.
- Provide correct APN and optional APN credentials for the SIM card to enable GPRS data.
- Choose the transport type if required by the device and ensure the device uses the shared Plaspy port.
- Verify connectivity and that the tracker ID is registered or recognized by your Plaspy account.
- Validate real time reporting and event forwarding in Plaspy after applying the settings.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GP4000. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and functioning GP4000 device with access to its configuration interface
- An active SIM card with data enabled and the carrier APN values available
- The device IMEI or tracker ID to include in SMS or configuration messages
- Access to the Jointech configuration method recommended for your unit such as SMS commands or the vendor tool
- A way to send SMS commands from a phone or management tool if using SMS based setup
- Access to Plaspy so you can confirm the device appears and reports after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GP4000 sends position fixes, telemetry, and event reports to the shared Plaspy server endpoint and port. Plaspy ingests these messages and maps them to the appropriate device record using the tracker ID or IMEI.

- The tracker is set to report to the Plaspy server domain or IP and to port 8888
- Data is sent over the selected transport protocol UDP or TCP depending on device selection
- Plaspy detects the tracker protocol automatically and processes incoming telemetry
- Position updates and alarm events become visible in Plaspy dashboards and logs
- Validation is performed by confirming that the device is actively reporting to Plaspy after configuration

## Common Configuration Workflow

Follow these practical steps to configure a GP4000 for Plaspy using public methods such as SMS commands or the official configuration tool.

1. Access the official Jointech configuration method for your GP4000 unit such as SMS-based commands or the vendor configuration tool.
2. Prepare your carrier APN details and optional APN username and password.
3. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 as required by the configuration method.
4. Set port 8888 in the device configuration. Remember that Plaspy uses the same port for all devices.
5. Choose UDP or TCP as the transport if the device requires an explicit selection.
6. Apply or save the configuration and restart the device if the procedure advises a reboot.
7. Validate that the GP4000 reports to Plaspy and that position and event messages appear in the platform.

## Example Configuration Commands

The Jointech GP4000 can be configured using SMS commands. The following public commands show the typical SMS syntax. Replace placeholders with your device values and carrier APN details.

- Note on placeholders
  - [trackerID] must be replaced with your device IMEI or tracker ID as required by Jointech
  - [apn] is the carrier APN string for mobile data
  - [apnu] and [apnp] are optional APN username and password if your carrier requires them

1. Set the GPRS server and APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
or using the server domain
```text
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2. (Optional) Set the APN user and password if required by the carrier
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Instructions
- Send each command as an SMS from the registered phone number for the tracker, or follow the Jointech procedure for sending configuration SMS.
- The APN user and password command is only needed when your mobile operator requires credentials in addition to the APN string.
- If a restart is required by the device after applying SMS commands, perform the restart as part of the workflow.

## Configuration Notes

- Jointech firmware versions and configuration command formats may vary. Confirm the exact SMS templates with your device documentation.
- SMS based setup is commonly supported for GP4000 but vendor tools or a PC configuration utility may also be available and preferred for bulk provisioning.
- Choose TCP or UDP based on your network reliability and the installer guidance; Plaspy accepts both and will auto detect protocol.
- Plaspy uses the same port for all supported devices. Ensure port 8888 is configured and not blocked by your carrier or network.
- Keep APN credentials secure and verify carrier APN values with your mobile operator before applying them.

## Why Use Plaspy with This Configuration

Using the Jointech GP4000 with Plaspy provides reliable visibility into vehicle location, event reporting, and telemetry for fleet operations. The GP4000’s field proven hardware combined with Plaspy’s automatic protocol detection and unified server endpoint simplifies device onboarding and helps teams get consistent, real time data into a single platform for monitoring and reporting.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration details and firmware behavior on the manufacturer site https://www.jointcontrols.com/. Manufacturer specifications and setup methods can change over time so confirming current documentation is recommended.
