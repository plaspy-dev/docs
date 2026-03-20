---
slug: /gotop/q10/configuration
id: q10-configuration
sidebar_label: Configuration
title: GOTOP - Q10 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP Q10 to connect to Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP Q10 configuration
  - GOTOP Q10 setup
  - GOTOP Q10 Plaspy configuration
  - Q10 tracker setup
  - GOTOP tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - personal tracker setup
  - GPRS tracker configuration
  - Q10 tracking software configuration
---

# GOTOP - Q10 Configuration

This page describes the public configuration context for using the GOTOP Q10 SOS GPS tracker with Plaspy. It focuses on the practical steps and server settings required to direct the Q10's GPRS reporting to the Plaspy platform so location, SOS alerts, and telemetry are visible in Plaspy maps and reports.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the Q10. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so this page concentrates on the public Plaspy settings and a practical workflow rather than device internals.

## Configuration Overview

The goal of configuring a GOTOP Q10 for Plaspy is to point the device's GPRS reporting to Plaspy's server endpoint, confirm reliable connectivity, and verify that position, SOS, and alarm events are delivered to your Plaspy instance for live monitoring and history.

- Configure the Q10 to send GPRS reports to the Plaspy server endpoint so positions appear on live maps.
- Ensure the device APN and SIM data plan allow GPRS data so the tracker can reach Plaspy.
- Select the transport option (UDP or TCP) and the common Plaspy port so the Q10 can communicate reliably.
- Validate device reporting and alarm behavior in Plaspy after saving settings to confirm live telemetry and SOS visibility.
- Use manufacturer tools or SMS commands as provided by GOTOP to apply the server and transport settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port for reporting
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged GOTOP Q10 with the manufacturer recommended SIM installed and an active data plan for GPRS.
- Access to the GOTOP configuration method for the Q10 such as the official configuration app, web tool, or SMS command set provided by the manufacturer.
- Knowledge of the mobile network APN for the SIM card so data reporting can be enabled.
- A test period where the device has good cellular coverage to verify GPRS reporting to Plaspy.
- Access to Plaspy account credentials and a place in the platform to view the device once it reports.

## How This Tracker Connects to Plaspy

When configured for GPRS reporting, the Q10 streams location and event data to the Plaspy server endpoint on the shared Plaspy port. Plaspy receives position updates and events, automatically determines the protocol, and makes the device visible on live maps and in historical playback.

- The Q10 reports periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- SOS alerts and emergency coordinates are sent to Plaspy and can be displayed or routed to alert workflows.
- Geo-fence alarms and low battery notifications are delivered to Plaspy for monitoring and notification.
- Plaspy automatically detects the tracker protocol so you generally do not need to specify a custom protocol type in the platform.
- Choosing UDP or TCP on the Q10 determines the transport for sending packets to port 8888.

## Common Configuration Workflow

1. Access the official GOTOP Q10 configuration method provided by the manufacturer such as the device SMS command set, mobile app, or configuration tool.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138 according to the device tool requirements.
3. Set the device reporting port to 8888 and ensure the port is used for the selected transport.
4. Choose the transport protocol UDP or TCP on the Q10 if the device requires transport selection.
5. Configure the SIM APN and any required operator credentials so GPRS data is permitted.
6. Apply or save the configuration and restart the device if the Q10 or its tool requires a reboot.
7. Validate that the Q10 reports to Plaspy by checking live location updates and event messages in the Plaspy platform.

## Example Configuration Commands

The exact commands and syntax for configuring a GOTOP Q10 depend on the manufacturer command set or configuration tool used. Because the Q10 supports GPRS reporting, you will typically provide the Plaspy server domain or IP and the shared port 8888, and select UDP or TCP as the transport. If you are using SMS commands or the GOTOP configuration app, refer to the official GOTOP user manual for precise command formats.

Example conceptual SMS or configuration entries you may encounter (syntax varies by firmware):
- Set server domain
```
server d.plaspy.com
```
- Or set server IP
```
server 54.85.159.138
```
- Set port and transport
```
port 8888
transport udp
```
- Save and restart if required
```
save
reboot
```

Note: The exact SMS command keywords and parameter order will differ by firmware. Always verify the precise commands in GOTOP documentation.

## Configuration Notes

- Firmware differences and hardware revisions can change command syntax and menu locations; confirm the correct procedure for your device revision.
- For reliable telemetry, ensure the carrier APN is set correctly on the Q10 so GPRS connections to d.plaspy.com or 54.85.159.138 on port 8888 can be established.
- Choose UDP or TCP based on local network characteristics; UDP may be preferred for lower overhead while TCP can offer more reliable delivery in some networks.
- If you use SMS-based setup, follow the manufacturer examples exactly and test that GPRS reporting is active afterward.
- Restarting the device after saving configuration is commonly required to ensure new server settings take effect.

## Why Use Plaspy with This Configuration

Configuring the GOTOP Q10 to report to Plaspy gives caregivers, operations teams, and asset managers real-time visibility into location, SOS events, and alarms from a compact personal tracker. Using Plaspy, teams can view live tracking on maps, receive alarm notifications, and review historical telemetry for investigation and reporting.

To learn more about using Plaspy with supported trackers and to review platform features, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer instructions for the GOTOP Q10, verify details on the official GOTOP site https://www.gotop.cc/ as device behavior and setup methods can change over time.
