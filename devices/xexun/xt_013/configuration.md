---
slug: /xexun/xt_013/configuration
id: xt_013-configuration
sidebar_label: Configuration
title: Xexun - XT-013 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun XT-013 showing Plaspy server settings and SMS setup steps for integration
keywords:
  - Xexun XT-013 configuration
  - XT-013 setup
  - Xexun GPS tracker configuration
  - Plaspy compatibility
  - GPS tracker server settings
  - XT-013 SMS commands
  - GPRS server setup
  - vehicle tracking configuration
  - asset tracking setup
  - tracking platform integration
---

# Xexun - XT-013 Configuration

This page documents the public configuration context for using the Xexun XT-013 tracker with Plaspy. It focuses on the practical setup steps and server values needed for the XT-013 to report to Plaspy so that devices become visible and manageable in the platform. Use this guide alongside manufacturer documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The XT-013 supports SMS configuration and GPRS server settings, and the commands below show the common public SMS flow for preparing the device to talk to Plaspy.

## Configuration Overview

This configuration process prepares the XT-013 to send location and alert data to Plaspy using the shared Plaspy server endpoint and port. The public SMS commands configure APN and GPRS server settings, set reporting behavior, and optionally restore factory settings before deployment.

- Configure the device APN and optional APN credentials so the tracker can establish GPRS data.
- Point the tracker to the Plaspy server domain or IP so it sends telemetry to Plaspy.
- Set the reporting interval so Plaspy receives updates at the desired frequency.
- Validate connectivity and that the device is visible in Plaspy after saving the settings.
- Optionally restore factory defaults before a fresh setup when needed.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (the device may be configured to use UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered XT-013 tracker with working battery or external power as required for your installation.  
- A SIM card installed with an active data plan and SMS capability for sending configuration commands.  
- The mobile network operator APN and optional APN username and password for GPRS data setup.  
- Access to the device configuration method supported by your unit, commonly SMS on the XT-013.  
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) and transport choice (UDP or TCP).  
- Ability to send and receive SMS messages to/from the device during configuration.

## How This Tracker Connects to Plaspy

When configured, the XT-013 establishes a GPRS connection and sends periodic position updates and events to the Plaspy endpoint. Plaspy receives those messages on the shared server and port, detects the device protocol automatically, and processes location and alert events for visibility and monitoring.

- The tracker is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- Plaspy listens on the same port for all supported devices and determines the protocol automatically.  
- Location reports and event alerts (for example move alert, geofence alerts, overspeed, and low battery) are sent to the Plaspy endpoint.  
- Plaspy presents received telemetry and events in the platform for operational monitoring and history.  
- Successful configuration makes the tracker visible in Plaspy and enables real time tracking and notifications.

## Common Configuration Workflow

1. Confirm you have the device phone number, SIM is active, and you can send SMS commands using the official Xexun method.  
2. If desired, optionally restore factory settings on the device before configuring.  
3. Use SMS or the vendor tool to enter the Plaspy server as d.plaspy.com or the IP 54.85.159.138.  
4. Set the server port to 8888 and choose UDP or TCP if the tracker requires a transport selection.  
5. Configure the operator APN and optional APN username and password so GPRS data can connect.  
6. Apply or save the configuration, then restart the device if required by the device firmware.  
7. Validate that the XT-013 reports to Plaspy and shows up in the platform with expected update intervals and alerts.

## Example Configuration Commands

The XT-013 can be configured by sending SMS commands. The sample commands below use the device default password 123456 as shown in public manufacturer examples. Preserve placeholders when you replace them with your actual values.

- Optional initial restore to factory defaults (use only if needed)
```sms
begin123456
```

- Set the operator APN (replace [apn] with your operator APN)
```sms
apn123456 [apn]
```

- Set the APN username if required (replace [apnu] with APN username)
```sms
apnuser123456 [apnu]
```

- Set the APN password if required (replace [apnp] with APN password)
```sms
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy endpoint and port (this example uses the Plaspy server IP and port)
```sms
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (send as shown; function depends on device firmware)
```sms
gprsmode123456
```

- Set the update interval to 60 seconds (example format shown by manufacturer)
```sms
t060s***n123456
```

Notes on placeholders: [apn] is your mobile operator APN string. [apnu] and [apnp] are optional APN username and password fields if your operator requires them. Replace the placeholders exactly with operator values when sending SMS.

## Configuration Notes

- The SMS command set above is a public example; exact command syntax can vary by firmware and regional device variants.  
- Use the default password 123456 only if it has not been changed. If your device password differs, substitute it in each command.  
- Choose UDP or TCP based on your device options; Plaspy supports both on port 8888 and will detect the protocol automatically.  
- APN username and password commands are optional and only required if your mobile operator enforces APN credentials.  
- If you perform a factory restore with begin123456 treat that step as optional and only when preparing a device for a fresh deployment.

## Why Use Plaspy with This Configuration

Configuring the Xexun XT-013 to report to Plaspy gives organizations a straightforward way to centralize location data, events, and alerts for assets and vehicles. With shared server settings and automatic protocol detection in Plaspy, many device models including the XT-013 can be brought online quickly for monitoring, geofence enforcement, and operational reporting.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific commands, firmware notes, and official setup documentation verify details with the manufacturer at https://www.xexun.com/ as vendor methods and firmware behavior can change over time.
