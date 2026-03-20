---
slug: /goome/ev02/configuration
id: ev02-configuration
sidebar_label: Configuration
title: Goome - EV02 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup and server settings to configure the Goome EV02 for use with Plaspy
keywords:
  - Goome EV02 configuration
  - Goome EV02 setup
  - EV02 server configuration
  - EV02 Plaspy setup
  - Plaspy GPS tracker configuration
  - Goome GPS tracker setup
  - EV02 tracking software configuration
  - vehicle tracking EV02
  - EV02 GPS platform setup
  - Goome EV02 integration
---

# Goome - EV02 Configuration

This page covers the public configuration context for using the Goome EV02 tracker with Plaspy. It explains the shared server values you will use to point an EV02 at Plaspy, the common SMS commands used by the model, and the general workflow to validate connectivity so the device becomes visible on the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands on this page as practical, public guidance and verify any device-specific details with the manufacturer documentation.

## Configuration Overview

The goal of EV02 configuration for Plaspy is to direct the tracker to the Plaspy server endpoint, confirm GPRS and SMS settings, and validate that location updates appear in the Plaspy platform. For EV02 this is commonly done with SMS commands provided by Goome or using the manufacturer tool when available.

- Point the EV02 to the Plaspy server domain or IP so telemetry is delivered to Plaspy.
- Configure the device APN so GPRS data can reach the network and Plaspy.
- Set the device transport and port so packets are sent to Plaspy on the same shared port used by all Plaspy devices.
- Set reporting interval or timers so the device sends updates at the desired frequency.
- Verify settings and device status using the built-in query commands and confirm visibility in Plaspy.
- Keep a record of firmware or vendor tool versions used during setup for future troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible EV02 device ready for configuration.
- A valid SIM card with data enabled and SMS capability, since EV02 configuration can be performed by SMS and it uses GSM GPRS connectivity.
- The correct APN information for the SIM operator (APN, and optional username and password).
- Access to the manufacturer's SMS command list or official configuration tool for the EV02.
- A way to receive or view device responses (SMS or device status queries) during setup.
- Knowledge of the desired reporting interval for your monitoring use case.

## How This Tracker Connects to Plaspy

The EV02 sends location and status data over GPRS to the Plaspy server endpoint and port. Once configured to point at Plaspy, the device will deliver telemetry to Plaspy where it becomes visible in the platform for real-time monitoring and playback.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Transport may be set to UDP or TCP depending on device preferences; Plaspy accepts both and detects the protocol automatically.
- Regular position updates and event reports are sent to Plaspy so the device appears in the platform.
- Plaspy provides visibility and trace playback from the incoming reports.
- Use the device status and server query commands to confirm the tracker is communicating with Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS commands as provided by Goome.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (Plaspy uses this single port for all devices).
4. Choose UDP or TCP if the EV02 requires you to select a transport protocol.
5. Configure the operator APN and any APN username or password required by the SIM.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by using the EV02 query commands and checking device visibility on Plaspy.

## Example Configuration Commands

The Goome EV02 can be configured by SMS. The following public SMS commands are provided in Goome documentation and show a typical order for setup. Preserve placeholders when you send commands.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the operator APN. Replace the placeholders with your SIM operator values:
```text
APN,[apn]{{# if apnu or apnp }},[apnu],[apnp]{{/ if }}#
```
Explanation: [apn] is your operator APN. [apnu] and [apnp] are optional APN username and password fields when required by the mobile operator.

- Set the GPRS server to Plaspy using the public IP and port provided by Plaspy:
```text
GPRSSET,54.85.159.138,8888#
```
Note: You may alternatively specify the domain d.plaspy.com in manufacturer tools that accept domains rather than IPs.

- Set the reporting interval (example sets updates every 60 seconds):
```text
TIMER,60#
```

- To check the current GPRS server settings on the device:
```text
GPRSSET#
```

- To check general device status:
```text
STATUS#
```

Follow the manufacturer guidance when sending SMS commands; some devices require a specific password prefix or a different command format depending on firmware.

## Configuration Notes

- Firmware versions and regional hardware variations can change available commands or exact syntax; always cross-check with Goome's current documentation.
- SMS based setup is commonly supported for EV02; if using SMS make sure the SIM can receive and send SMS and that you can view responses.
- If your tool accepts a domain instead of an IP, you may enter d.plaspy.com; otherwise the public IP 54.85.159.138 is a valid Plaspy endpoint.
- Choose UDP or TCP based on device options; Plaspy accepts both and will auto-detect the protocol.
- Plaspy uses the same port for all supported devices so use port 8888 when configuring the EV02.

## Why Use Plaspy with This Configuration

Using Plaspy with a configured Goome EV02 gives organizations a straightforward way to centralize vehicle visibility, monitor movement in real time, and review historical traces for operational analysis. Pointing the EV02 at Plaspy and validating the GPRS and APN setup ensures the device reports reliably into the platform for alerts, playback, and monitoring.

To learn more about Plaspy and supported setups visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup methods can change over time, so verify the latest EV02 configuration details and command syntax on the Goome official website http://www.goomegpstracker.com.
