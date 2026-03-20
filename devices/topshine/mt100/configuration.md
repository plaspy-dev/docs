---
slug: /topshine/mt100/configuration
id: mt100-configuration
sidebar_label: Configuration
title: TopShine - MT100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT100 showing how to configure the device for use with Plaspy real time tracking
keywords:
  - TopShine MT100 configuration
  - TopShine MT100 setup
  - MT100 Plaspy configuration
  - TopShine tracker configuration
  - MT100 server configuration
  - TopShine GPS tracker setup
  - vehicle tracker Plaspy setup
  - fleet tracker MT100
  - MT100 GPRS configuration
  - Plaspy tracker setup
---

# TopShine - MT100 Configuration

This page covers the public configuration context for using the TopShine MT100 tracker with the Plaspy platform. It gathers the practical, publicly available setup steps and server settings that are commonly used to get the MT100 reporting to Plaspy for live tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. The MT100 supports SMS and remote configuration methods; this page highlights the SMS command flow published for the model and the exact Plaspy endpoint details you will use.

## Configuration Overview

The goal of configuration is to prepare the MT100 so it can reliably communicate with Plaspy, report position and event data, and appear in the platform for monitoring and reporting. When available, SMS commands can be used to program APN, server endpoint, transport mode, and update intervals; other installers use manufacturer software or remote configuration tools depending on the installation.

- Set network APN and any required credentials so the device has mobile data connectivity.
- Point the MT100 to the Plaspy server endpoint and port so reports reach the platform.
- Choose the transport type if the device requires UDP or TCP selection.
- Verify device identity and IMEI so the device appears in Plaspy with the correct identifier.
- Validate connectivity by observing device reports in Plaspy and by using the device verification SMS command.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered MT100 unit with the wiring and any external sensors installed as required by your installation.
- An active SIM with data service and SMS capability configured with the operator APN.
- The device IMEI and the device SMS password if using SMS configuration; model configuration examples use the default password 000000.
- Access to the manufacturer SMS commands or official configuration software from TopShine.
- A Plaspy account or provisioning method to register the device once it reports to the platform.
- A basic test plan to confirm location updates and event reporting after configuration.

## How This Tracker Connects to Plaspy

The MT100 is configured to send position and event data to Plaspy by pointing its GPRS or LTE connection to the Plaspy server endpoint on the shared port. Once programmed, the device uploads periodic location updates and event messages so vehicles and driver events are visible on the Plaspy platform.

- The tracker reports location updates and telemetry to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP at the device; Plaspy supports both and will detect the protocol automatically.
- After successful connection, driver ID and event messages are forwarded to Plaspy for alarming and reporting.
- Plaspy aggregates location, telemetry, and driver identification events for live monitoring and historical playback.
- Device identity is tied to the IMEI or the configured device id so the platform can display and organize device data.

## Common Configuration Workflow

1. Access the official TopShine configuration method for your MT100 unit, for example SMS commands or the manufacturer configuration tool.
2. Confirm or enter the APN and any APN credentials required by your mobile operator.
3. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the device requires you to select a transport.
5. Apply or save the configuration and send any required save commands from the manufacturer tool or by SMS.
6. Restart or power cycle the device if the manufacturer instructions advise doing so.
7. Validate that the device reports to Plaspy by checking the device status in your Plaspy account and confirming location updates arrive.

## Example Configuration Commands

The MT100 can be configured by SMS using the manufacturer command set. The sample commands below use the device default password 000000. Replace placeholders as noted before sending.

- Optional initial factory reset command (use only when you need to restore factory defaults)
```
W000000,990,099###
```

- Set the device ID using the first 14 digits of the IMEI
```
W000000,010,{{first14_IMEI}}
```
Note: Replace {{first14_IMEI}} with the first 14 digits of the device IMEI. The device and Plaspy use IMEI-based identifiers; ensure the value matches your unit.

- Set the operator APN and optional APN username and password
```
W000000,011,[apn]{{,apn_user,apn_pass}}
```
Examples:
- If only APN is required
```
W000000,011,[apn]
```
- If APN username and password are required
```
W000000,011,[apn],[apnu],[apnp]
```
Placeholders explanation:
- [apn] is the mobile operator APN
- [apnu] is the APN username if required
- [apnp] is the APN password if required

- Set the GPRS server to Plaspy using the public IP and port
```
W000000,012,54.85.159.138,8888
```
You may alternatively use the server domain by replacing the IP with d.plaspy.com if the device accepts hostnames.

- Switch to GPRS data mode
```
W000000,013,2
```

- Set the position update interval (example value 6 used in the manufacturer sample)
```
W000000,014,6
```

- Verify device IMEI (query command)
```
W000000,601
```

Send each SMS from the authorized phone number if required by your unit, and observe any SMS confirmations from the device. Keep the default password 000000 unless it has been changed.

## Configuration Notes

- Firmware differences between MT100 revisions may change command syntax or available parameters; always check TopShine release notes for your hardware revision.
- The MT100 supports SMS based configuration and remote TCP/UDP configuration depending on firmware and installer tools; choose the method appropriate for your installation and security policies.
- When the device requires a transport selection, choose UDP or TCP based on network reliability and any carrier restrictions; Plaspy supports both and detects protocol automatically.
- Ensure APN credentials are correct before changing server settings to avoid loss of connectivity; test data connectivity separately if possible.
- Use the IMEI verification command to confirm you are configuring the intended device and to construct any device id values required by your provisioning workflow.

## Why Use Plaspy with This Configuration

Configuring the TopShine MT100 to report to Plaspy gives fleets consolidated real time location, driver identification, and event reporting in a single platform. For operations that need driver accountability, anti-theft controls, and operational analytics, combining the MT100 hardware capabilities with Plaspy’s device agnostic server endpoint simplifies deployment and ongoing monitoring.

To learn more about Plaspy and how it integrates with devices like the MT100 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guides confirm details on the TopShine official site https://www.gztopshine.com as manufacturer specifications and setup methods may change over time.
