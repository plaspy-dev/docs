---
slug: /wanway/g18/configuration
id: g18-configuration
sidebar_label: Configuration
title: WanWay - G18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay G18 GPS tracker setup and Plaspy server settings for quick integration
keywords:
  - WanWay G18 configuration
  - WanWay G18 setup
  - WanWay G18 Plaspy
  - WanWay G18 server configuration
  - WanWay GPS tracker configuration
  - G18 tracker setup
  - G18 server settings Plaspy
  - WanWay G18 SMS commands
  - G18 GPRS configuration
  - vehicle tracker G18 setup
---

# WanWay - G18 Configuration

This page documents the public configuration context for using the WanWay G18 tracker with Plaspy. It focuses on the practical, public settings required to point the device at the Plaspy server and validate connectivity. Use this guide to understand required server details and the general SMS or configuration workflow; confirm any device specific nuances with WanWay documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The G18 supports 2G GSM and GPRS configuration via SMS commands and GPRS server settings, which are shown in the example commands below.

## Configuration Overview

The goal of configuration is to prepare the G18 to communicate reliably with Plaspy, send periodic position updates and event reports, and become visible in the Plaspy platform. Typical configuration sets the carrier APN, points the tracker to the Plaspy endpoint, configures reporting intervals, and enables GPRS data mode.

- Configure carrier APN so the device can use mobile data for GPRS uploads.
- Point the tracker to Plaspy server d.plaspy.com (or the server IP) and set the shared port.
- Set reporting interval so the device sends periodic GPS fixes to Plaspy.
- Enable GPRS data mode and verify the device can register on the network.
- Validate configuration using the tracker status and parameter query commands.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and will automatically detect the protocol used by the tracker when it connects.

## Typical Requirements Before Setup

- An active SIM card with GPRS data enabled and the correct APN for your carrier.
- Power to the G18 and physical access to send SMS commands or use the manufacturer configuration tool.
- A Plaspy account capable of receiving device data and associating devices in the platform.
- Knowledge of your carrier APN and any required APN username and password.
- Basic ability to send SMS to the device IMEI number or use the WanWay configuration utility where available.
- Access to the WanWay official documentation for firmware specific command syntax and examples.

## How This Tracker Connects to Plaspy

When configured, the G18 uses GPRS to upload location and event data to the shared Plaspy server endpoint. Plaspy ingests those packets, normalizes protocol-specific payloads, and exposes telemetry and alerts in dashboards and reports.

- The tracker is pointed at d.plaspy.com (or 54.85.159.138) on port 8888 for all device connections.
- Position fixes and event packets are sent over GPRS to the Plaspy endpoint.
- Plaspy automatically detects the tracker protocol and processes incoming data.
- Event alerts such as vibration, tamper, and collision reports are forwarded to the Plaspy platform.
- Plaspy provides visibility and operational monitoring once the device reports to the shared server.

## Common Configuration Workflow

1. Access the official WanWay configuration method or software (SMS commands, vendor tool, or installer utility) for the G18.
2. Configure the carrier APN so the device can use GPRS data.
3. Enter the Plaspy server address by specifying d.plaspy.com or the server IP 54.85.159.138.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires an explicit selection; otherwise rely on the device defaults and Plaspy automatic detection.
6. Apply or save the configuration and enable GPRS data mode on the device.
7. Restart or power cycle the device if required by the firmware.
8. Validate the device reports to Plaspy by checking the Plaspy platform and using the device verification commands.

## Example Configuration Commands

The G18 accepts SMS based configuration commands. Below are the public example commands provided for the model in their recommended order. Preserve placeholders when replacing values.

- Set the carrier APN (replace placeholders with your APN values; apnu and apnp are optional and used only if your operator requires username and password):
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Set the GPRS server to Plaspy using the public domain and port. Keep the parameter order as shown:
```
SERVER,1,d.plaspy.com,8888,0#
```
Note: The final parameter in the SERVER command may be firmware specific. Consult WanWay documentation for exact syntax and meaning.

- Set the location update interval (example sets timer values; modify as needed):
```
TIMER,60,60#
```
- Enable GPRS mode on the tracker:
```
GPRSON,1#
```
- Verify current configuration parameters:
```
PARAM#
```
- Check tracker status:
```
STATUS#
```

Send these SMS commands to the device as directed by the WanWay user manual. Replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier APN, username, and password as needed.

## Configuration Notes

- SMS based setup is supported for the G18; commands and parameter order are firmware dependent, so confirm exact syntax with WanWay documentation.
- The SERVER command shown uses d.plaspy.com and port 8888; Plaspy uses a single shared port and automatic protocol detection for incoming trackers.
- If your device requires explicit transport selection, choose UDP or TCP based on installer guidance; Plaspy accepts either.
- Reporting intervals and behavior may vary across firmware versions and hardware revisions; test after configuration.
- Keep manufacturer firmware and installation notes accessible during setup to troubleshoot any command syntax or response differences.

## Why Use Plaspy with This Configuration

Using the WanWay G18 configured to report to Plaspy gives fleets compact hardware combined with a unified platform for position tracking, event alerts, and driver behavior visibility. The shared server configuration and automatic protocol detection in Plaspy make it straightforward to onboard multiple G18 units and get consistent telemetry into your mapping and reporting workflows.

To learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For device specific methods, firmware behavior, and the latest command syntax always verify current information with the manufacturer at https://www.wanwaytech.net/.
