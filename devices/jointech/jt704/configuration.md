---
slug: /jointech/jt704/configuration
id: jt704-configuration
sidebar_label: Configuration
title: Jointech - JT704 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT704 container tracker showing how to connect the device to Plaspy with required server settings
keywords:
- Jointech JT704
- JT704 configuration
- Jointech JT704 configuration
- JT704 setup for Plaspy
- Jointech tracker setup
- container tracker configuration
- GPS tracker configuration
- Plaspy configuration guide
- fleet tracking configuration
- container GPS setup
---

# Jointech - JT704 Configuration

This page covers the public configuration context for using the Jointech JT704 container tracker with Plaspy. It summarizes the practical steps and public commands for configuring the device to report position and status into Plaspy, using the shared server settings Plaspy expects.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The JT704 can be configured via SMS commands as shown in the example commands below; follow the official manufacturer documentation for device specific details.

## Configuration Overview

The objective of this configuration is to prepare the JT704 to communicate reliably with Plaspy so that location, scheduled reports, and device status are visible in the platform. The public settings below are the values you will apply on the device or via Jointech tools so Plaspy can receive and interpret the tracker messages.

- Set the tracker to report to Plaspy by entering the Plaspy server domain or IP and the shared port that Plaspy uses.
- Ensure the device APN and optional APN credentials are configured so the tracker can use mobile data for GPRS reporting.
- Choose UDP or TCP transport on the device if it requires an explicit transport selection; Plaspy accepts both.
- Save and apply the configuration, restart the tracker if required, and validate the device appears and reports in Plaspy.
- Use the SMS commands or manufacturer configuration tool as provided by Jointech to apply settings when remote configuration is necessary.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (All devices in Plaspy use the same port)  
- Transport: UDP or TCP supported by the device on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol for incoming connections

## Typical Requirements Before Setup

- Tracker is powered and accessible for configuration (battery charged or connected to power as needed).  
- Active cellular SIM that has data and SMS enabled and a known APN for the network operator.  
- Device ID or factory identifier for the tracker (used in SMS commands for some Jointech models).  
- Access to the official Jointech configuration method such as SMS command interface or manufacturer software.  
- Cellular coverage at the installation location to allow GPRS connections to Plaspy.  
- Permission to send SMS commands to the device or to use the manufacturer provisioning tool.

## How This Tracker Connects to Plaspy

When configured, the JT704 reports location and status to the Plaspy server endpoint so Plaspy can display live positions, scheduled check-ins, and device condition in the platform.

- The tracker is configured to report to the shared Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- Reporting can use UDP or TCP transport depending on device settings and network behavior.  
- Plaspy automatically detects and decodes the tracker protocol for incoming messages.  
- Reports include the device check-in messages that Plaspy ingests for live map views and historical playback.  
- Device status and scheduled reporting support allow Plaspy to surface alerts such as low battery or missed check-ins.

## Common Configuration Workflow

1. Access the official Jointech configuration method or software, or prepare to send SMS configuration commands as supported by the JT704.  
2. Enter the Plaspy server address on the device configuration: either d.plaspy.com or the IP 54.85.159.138.  
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP transport if the device requires explicit transport selection.  
5. Apply or save the configuration on the tracker and send any required SMS commands to commit settings.  
6. Restart the device if recommended by the manufacturer or if the device requires a reboot to apply network settings.  
7. Validate the tracker reports to Plaspy and appears in the platform with expected location and scheduled reports.

## Example Configuration Commands

The JT704 supports SMS based configuration. The public Jointech commands below show how to set the GPRS server and APN, and optionally set APN credentials. Replace the placeholders with your actual values and send each line as an SMS from an authorized number to the tracker.

1. Set the GPRS server and APN (replace {{trackerID}} and {{apn}}):
```text
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

2. (Optional) Set the APN user and password if your network requires them (replace {{trackerID}}, {{apnu}}, and {{apnp}}):
```text
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

Notes on placeholders:
- {{trackerID}} — the device ID or identifier used by the JT704 for command addressing. Type or obtain this from the device or Jointech documentation.  
- {{apn}} — the mobile network APN string required for GPRS data access.  
- {{apnu}} — optional APN username when the carrier requires authentication.  
- {{apnp}} — optional APN password when the carrier requires authentication.

If your deployment requires selecting UDP or TCP explicitly and the SMS command set above does not include a transport parameter, use the Jointech configuration tool or check the device manual for the specific SMS parameter used to set transport mode.

## Configuration Notes

- SMS based configuration is supported by the JT704 and is a common method for out-of-band provisioning in the field.  
- APN user and password commands are optional and should be sent only when the carrier requires authentication.  
- Different firmware revisions or regional variants of the JT704 can use slightly different command formats; verify commands against the device manual.  
- Choose UDP or TCP based on network reliability and firewall rules; Plaspy accepts both on port 8888 and will detect the protocol automatically.  
- Always review the official Jointech documentation for the exact SMS syntax and additional parameters before deploying widely.

## Why Use Plaspy with This Configuration

Using the JT704 with Plaspy gives logistics teams centralized visibility into container movements with a setup that supports both real-time and scheduled reporting. The shared Plaspy server settings simplify provisioning across fleets because every supported device reports to the same endpoint and port while Plaspy handles protocol detection, reducing per-device parsing complexity.

To learn more about Plaspy and how it manages device connectivity and tracking, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest JT704 setup instructions and command syntax on the official Jointech website https://www.jointcontrols.com/.
