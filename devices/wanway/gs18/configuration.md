---
slug: /wanway/gs18/configuration
id: gs18-configuration
sidebar_label: Configuration
title: WanWay - GS18 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure WanWay GS18 to report to Plaspy using shared server settings and SMS based configuration commands
keywords:
  - WanWay GS18 configuration
  - WanWay GS18 setup Plaspy
  - GS18 server configuration
  - WanWay GPS tracker configuration
  - Plaspy tracker setup
  - GS18 tracking configuration
  - WanWay GS18 GPRS setup
  - GS18 SMS configuration
  - fleet tracking WanWay GS18
  - GS18 GPS tracker setup
---

# WanWay - GS18 Configuration

This page describes the public configuration context for using the WanWay GS18 tracker with Plaspy. It focuses on the practical steps and server settings required so the GS18 can forward location and status data to the Plaspy platform. Where available, SMS commands from the device documentation are included to help you apply the settings directly.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when data arrives. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands on this page as the public, general guidance and verify any device specific differences with WanWay documentation.

## Configuration Overview

The configuration process prepares the GS18 to communicate reliably with Plaspy by setting network credentials, the reporting server, and reporting intervals. For GS18 devices the public configuration workflow commonly uses SMS commands and the device built in GPRS mode to send data to Plaspy.

- Configure the carrier APN so the tracker can use mobile data for GPRS reporting.
- Point the device to the Plaspy server endpoint using the shared server settings.
- Set a reporting interval so the device sends regular location updates to Plaspy.
- Enable GPRS reporting mode and verify connectivity with verification commands.
- Confirm the device appears in Plaspy after configuration so tracking and event visibility are active.

## Plaspy Server Settings

Use these Plaspy server settings when configuring the GS18. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

## Typical Requirements Before Setup

- A charged GS18 with sufficient battery or connected to power for initial configuration.
- An active SIM card with a data plan and the correct APN information for the carrier.
- Ability to send SMS commands from a phone number the tracker accepts for configuration.
- Access to the WanWay GS18 user manual or vendor configuration instructions for model specific details.
- Confirmation of network coverage where the device will operate so GPRS reporting can succeed.

## How This Tracker Connects to Plaspy

When configured, the GS18 sends its location and status messages to the shared Plaspy server endpoint and port. Plaspy receives those messages and assigns the detected protocol automatically so that location data appears in the platform without per device protocol selection.

- The GS18 is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- You can choose UDP or TCP transport on the device when required by firmware or vendor tools.
- The tracker sends periodic reports based on the configured TIMER interval.
- Plaspy receives the data and maps it to the appropriate device record using its protocol detection.
- Verification commands can be sent to the tracker to confirm parameters and runtime status.

## Common Configuration Workflow

1. Access the official WanWay GS18 configuration method or software and review the SMS command format from the manufacturer documentation.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 as required by Plaspy.
4. Choose UDP or TCP on the tracker if the device requires transport selection.
5. Configure the carrier APN for GPRS data using the SMS command or manufacturer tool.
6. Apply or save the configuration and restart the device if the tracker or firmware requires a reboot.
7. Validate that the device reports to Plaspy and appears in the platform within a few reporting intervals.

## Example Configuration Commands

The GS18 supports SMS based configuration. The following commands are public examples extracted from the WanWay GS18 documentation. Send each command as an SMS from an authorized phone to the tracker. Preserve placeholders when filling in your carrier APN details.

1. Configure your carrier APN
```
APN,[apn]# 
```
If your carrier requires a username and password, use the extended form
```
APN,[apn],[apnu],[apnp]#
```
- Explanation of placeholders
  - [apn] is the carrier APN name
  - [apnu] is the APN username if required by the operator
  - [apnp] is the APN password if required by the operator

2. Setup the GPRS server to Plaspy
```
SERVER,1,d.plaspy.com,8888,0#
```
- This command points the GS18 to the Plaspy server domain on port 8888
- If you prefer to use the server IP instead of the domain, replace d.plaspy.com with 54.85.159.138

3. Set the update interval
```
TIMER,60,60#
```
- Example sets reporting intervals; adjust values as needed per your tracking policy

4. Switch to GPRS reporting mode
```
GPRSON,1#
```
- Enables GPRS data reporting so the device sends data to the configured SERVER

Verification commands

- Check the current configuration
```
PARAM#
```

- Check tracker status
```
STATUS#
```

Use these verification commands after applying settings to confirm the tracker has accepted the parameters and is operating in the intended mode.

## Configuration Notes

- The GS18 documentation shows SMS based configuration is supported; you may also use vendor tools if available for batch or remote provisioning.
- Firmware variations can change command syntax or available options; always confirm commands with the device manual for your firmware revision.
- Choose UDP or TCP according to your integration preferences or firmware requirements. Plaspy accepts both on port 8888 and will auto detect the protocol.
- Ensure APN credentials are correct for the SIM in the device. Missing or incorrect APN settings are the most common cause of failed GPRS connections.
- After saving settings, a device restart may be required for changes to take effect. Monitor the device with PARAM# and STATUS# to verify operation.

## Why Use Plaspy with This Configuration

Configuring the WanWay GS18 to report to Plaspy provides a straightforward path to bring GS18 location and operational data into a single fleet management and monitoring environment. Using the shared Plaspy server settings reduces per device configuration complexity and lets Plaspy handle protocol detection so devices appear on the platform with minimal manual intervention.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes, and manufacturer guidance always verify information on the WanWay website https://www.wanwaytech.net/.
