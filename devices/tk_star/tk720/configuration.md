---
slug: /tk_star/tk720/configuration
id: tk720-configuration
sidebar_label: Configuration
title: TK-Star - TK720 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK Star TK720 to connect with Plaspy using shared server settings and SMS commands
keywords:
  - TK Star TK720 configuration
  - TK720 setup for Plaspy
  - TK Star tracker configuration
  - TK720 GPS tracker setup
  - TK720 server configuration
  - Plaspy tracker integration
  - TK720 SMS configuration
  - vehicle tracking TK720
  - TK720 APN settings
  - Plaspy server setup
---

# TK-Star - TK720 Configuration

This page documents the public configuration context for using the TK-Star TK720 with Plaspy. It summarizes the practical settings and SMS commands commonly used to point a TK720 at the Plaspy server endpoint and to validate basic connectivity for real time tracking and event reporting. Use this page as a technical reference for Plaspy compatibility and initial setup steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the same Plaspy endpoint and port apply to all compatible trackers. Manufacturer-side setup steps for the TK720 can vary by firmware version, hardware revision, installation type, and vendor tools. Where available this page includes publicly documented SMS commands and notes provided by the device manufacturer to help you configure the tracker for Plaspy.

## Configuration Overview

The goal of TK720 configuration for Plaspy is to prepare the tracker to report position and event data reliably to the Plaspy platform and to validate that data is visible in your Plaspy account. Configuration typically involves setting the device APN, assigning the Plaspy server address and port, choosing a transport method if required, and confirming reporting intervals and modes.

- Set the mobile data APN and any APN credentials so the TK720 can establish GPRS connectivity.
- Configure the GPRS server to point to Plaspy using the provided server domain or IP and the standard Plaspy port.
- Select UDP or TCP transport where the device requires a transport selection.
- Set the upload interval and switch the device to GPRS reporting mode so it sends periodic location updates.
- Verify the device reports to Plaspy and check for event alerts such as vibration or movement in the Plaspy platform.
- Use manufacturer SMS commands or the official configuration tool to apply settings, depending on your device toolchain.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: the platform automatically detects the tracker protocol and uses the same port for all supported devices

These values are the public Plaspy endpoint and must be entered on the device or via SMS commands so the TK720 reports to Plaspy.

## Typical Requirements Before Setup

- A powered TK720 with the SIM slot accessible and a charged battery or connected power source.  
- A GSM SIM card with active data (GPRS) and the correct APN for the cellular operator.  
- Access to the TK720 configuration method supported by your device (SMS commands or official manufacturer software).  
- Knowledge of the device password if required for configuration (the sample manufacturer commands use 123456 as the default password).  
- A Plaspy account or access to the Plaspy platform to validate that the device is reporting correctly.  
- Manufacturer documentation or release notes for your TK720 firmware version to confirm command syntax and behavior.

## How This Tracker Connects to Plaspy

The TK720 sends periodic position updates and event notifications to the Plaspy server endpoint on the shared Plaspy port so data appears in the Plaspy dashboards, maps, and reports. Plaspy ingests telemetry and forwards alerts and command responses to authorized users.

- The tracker is configured to report to the shared Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.  
- The device can use UDP or TCP transport on port 8888 depending on device settings and operator preference.  
- Plaspy automatically detects the tracker protocol so the same server and port apply across supported trackers.  
- Location updates, vibration and move alerts, and other events are forwarded to Plaspy for visualization and notifications.  
- Once reporting is active, Plaspy provides route playback and event history for operational monitoring.

## Common Configuration Workflow

1. Access the official TK-Star configuration method for your TK720 (SMS commands or the manufacturer's configuration tool) as described in the device documentation.  
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the IP address 54.85.159.138 depending on the device command or tool options.  
3. Set the server port to 8888, since Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP if the device requires a transport selection.  
5. Configure the APN and any APN credentials required for GPRS connectivity.  
6. Apply or save the configuration on the device and switch the device to GPRS reporting mode if required.  
7. Restart the device if recommended by the manufacturer, then validate that the TK720 reports to Plaspy and that location and event data appear in your Plaspy account.

## Example Configuration Commands

The TK720 supports SMS-based setup using commands. The following example commands are provided in the manufacturer public documentation and show a common sequence. The device default password shown here is 123456 as published by the manufacturer. Labelled commands should be sent as separate SMS messages to the device.

- Optional initial factory restore (only use if you need to reset the device to factory defaults):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your carrier APN):
```text
apn123456 {{apn}}
```

- Set the APN username if required (replace {{apnu}} with the APN username):
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required (replace {{apnp}} with the APN password):
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the public IP and port:
```text
adminip123456 54.85.159.138 8888
```
Note: You may also be able to supply the server domain d.plaspy.com in tools that accept a hostname instead of an IP address.

- Set the upload interval to 60 seconds:
```text
upload123456 60
```

- Switch the device to GPRS reporting mode:
```text
gprs123456
```

Placeholders explained:
- {{apn}} — your mobile operator APN string required for data connectivity.  
- {{apnu}} — APN username if your operator requires one.  
- {{apnp}} — APN password if your operator requires one.

Send each command as a separate SMS message unless your tool or provisioning method supports batch commands. Confirm command success via the device reply messages or via reporting in Plaspy.

## Configuration Notes

- SMS based configuration is commonly supported for the TK720; follow the manufacturer syntax precisely and be aware that some firmware versions require slightly different command forms.  
- The device can be pointed to d.plaspy.com or to the numeric IP 54.85.159.138; use whichever method your provisioning tool supports.  
- Choose UDP or TCP per installation needs; Plaspy will automatically detect the device protocol on the shared port 8888.  
- APN username and password fields are optional for many carriers; only set them if your operator requires credentials.  
- Always cross check commands and default passwords against the official TK-Star documentation for your device firmware version.

## Why Use Plaspy with This Configuration

Configuring the TK720 to report to Plaspy gives fleet managers and vehicle owners reliable visibility into position and event telemetry through a shared server endpoint with automatic protocol detection. That visibility supports theft response, route playback, alerts, and operational oversight while using the same standardized Plaspy connection settings across devices.

To learn more about Plaspy and how the platform works with trackers like the TK-Star TK720 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify the current manufacturer documentation at https://www.tk-star.com/ as methods and firmware behavior can change over time.
