---
slug: /jointech/jt709c/configuration
id: jt709c-configuration
sidebar_label: Configuration
title: Jointech - JT709C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT709C setup with Plaspy including server settings commands and workflow
keywords:
  - Jointech JT709C configuration
  - JT709C setup
  - JT709C Plaspy
  - Jointech tracker configuration
  - GPS tracker configuration
  - tracking lock setup
  - fleet management setup
  - Plaspy device configuration
  - asset security tracker
  - container seal configuration
---

# Jointech - JT709C Configuration

This page documents the public configuration context for using the Jointech JT709C with Plaspy. It describes the shared server settings Plaspy requires, explains the practical setup steps that are commonly used, and shows example SMS configuration commands that are publicly available for the JT709C. Use this guide to prepare the device for Plaspy integration and to verify your installation workflow.

Plaspy uses the same shared server settings for supported devices and automatically detects the tracker protocol when the device reports in. Exact manufacturer side steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. Where available this page includes the JT709C SMS command examples that are used to set the GPRS server and APN values.

## Configuration Overview

The configuration process prepares the JT709C to send location and event data to the Plaspy platform and ensures the device is reachable and visible in your Plaspy account. For JT709C the manufacturer provides SMS based configuration commands to set the GPRS server and APN so the device can use mobile data for reporting.

- Configure the device to report to the Plaspy server endpoint so location and unlock events appear in Plaspy.
- Set APN and optional APN credentials so the tracker can use mobile data for real time reporting.
- Choose the transport protocol UDP or TCP as required by your installation and network.
- Validate device connectivity and confirm the tracker appears in Plaspy dashboards.
- Save and apply settings on the device and restart if required to begin reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A fully charged JT709C and proper physical installation according to Jointech instructions
- An active SIM card with mobile data and SMS capability installed in the device if using GPRS reporting
- The device ID or tracker IMEI required by Jointech SMS commands and configuration tools
- APN value and optional APN username and password provided by the mobile network operator
- Access to the official Jointech configuration method such as SMS commands or vendor software
- A way to receive and confirm device reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured, the JT709C reports location and event data to the shared Plaspy server endpoint and port. Plaspy receives the incoming connection over the selected transport and maps the device feed into the platform where protocol detection happens automatically.

- The tracker is set to report to d.plaspy.com or the Plaspy IP 54.85.159.138 on port 8888
- Data can be sent using either UDP or TCP depending on device settings and network requirements
- Plaspy auto detects the tracker protocol and associates incoming data with the correct device
- Location updates and unlock event logs are ingested into Plaspy for visibility and alerts
- After successful configuration the device should appear in Plaspy and begin uploading events

## Common Configuration Workflow

1. Access the official Jointech configuration method or software and confirm the device ID required for SMS commands.
2. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device configuration fields.
3. Set the port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Set the APN and optional APN user and password so the device can use mobile data.
6. Apply or save the configuration on the device and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and that location and event data appear in the platform.

## Example Configuration Commands

The Jointech JT709C can be configured using SMS commands. Below are the public SMS command examples as provided by the manufacturer. Replace placeholders with your actual values.

1. Set the GPRS server and APN
- Send this SMS after replacing [trackerID] with the device ID and [apn] with your mobile operator APN.

```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

2. Optionally set the APN username and password
- Send this SMS only if your APN requires a username and password. Replace [apnu] and [apnp] with your APN user and APN password.

```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Notes on placeholders
- [trackerID]: the device ID or IMEI inserted into the SMS as required by Jointech
- [apn]: your mobile network APN string required for data connectivity
- [apnu] and [apnp]: optional APN username and password if the carrier requires authentication

Send each command as a single SMS to the JT709C device phone number using the standard SMS method supported by Jointech. The second command is not required if the APN does not require credentials.

## Configuration Notes

- Firmware and hardware revisions can change command formats or supported parameters; verify the exact command syntax for your device firmware.
- The JT709C supports SMS based configuration as shown above when using GPRS reporting and APN settings.
- Choose UDP or TCP based on network reliability and your preferred transport behavior; Plaspy supports both on the shared port.
- Plaspy uses the same port for all devices and automatically detects the incoming protocol so you do not need different ports per device.
- Always confirm final connectivity by checking that the device appears and reports in Plaspy after configuration.

## Why Use Plaspy with This Configuration

Using the JT709C with Plaspy combines the device's tamper evident sealing and unlock audit trail with Plaspy's centralized telemetry and fleet management. This makes it easier to correlate location, access events, and alerts from a single platform for improved operational oversight and security workflows.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time so verify current setup details and command syntax with Jointech at https://www.jointcontrols.com/ before deploying.
