---
slug: /topshine/ublox_7/configuration
id: ublox_7-configuration
sidebar_label: Configuration
title: TopShine - Ublox 7 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup and server configuration guide for TopShine Ublox 7 with Plaspy
keywords:
  - TopShine Ublox 7 configuration
  - TopShine Ublox 7 setup
  - TopShine Ublox 7 server configuration
  - Ublox 7 Plaspy
  - Ublox 7 GPS tracker setup
  - TopShine tracker configuration
  - GPS tracker Plaspy integration
  - Ublox 7 GPRS setup
  - TopShine MT06 configuration
  - Plaspy tracker configuration
---

# TopShine - Ublox 7 Configuration

This page documents the public configuration context for using the TopShine Ublox 7 tracker (MT06) with Plaspy. It gathers the practical server settings and SMS/GPRS commands that are commonly used to prepare the unit for reliable communications with the Plaspy platform.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. Where available, this page includes the device SMS commands supplied by the manufacturer and explains placeholders such as APN parameters and the default device password.

## Configuration Overview

The goal of configuration is to point the Ublox 7 at Plaspy, verify connectivity, and enable location and event reporting so the device is visible inside your Plaspy account. For the Ublox 7 Mini the manufacturer provides SMS-based commands to set device ID, APN, GPRS server, transport mode and reporting interval.

- Set operator APN and optional APN credentials so the device can use GPRS.
- Configure the GPRS server address and port so the tracker sends data to Plaspy.
- Choose transport (UDP or TCP) if required and enable GPRS operation for online reporting.
- Validate the device IMEI and device ID to match records in the tracking platform.
- Confirm the tracker is reporting to the shared Plaspy endpoint and visible in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may be configured to use either)  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy ingestion endpoint and must be entered on the device or sent via the device configuration method so the Ublox 7 reports to Plaspy.

## Typical Requirements Before Setup

- Power the tracker from a stable vehicle supply or bench power so it can complete configuration steps.  
- A working SIM that supports GPRS with a configured APN for the mobile operator.  
- Access to the device IMEI to identify the tracker and to form device ID entries.  
- Ability to send SMS commands to the tracker or use the manufacturer configuration tool as required.  
- Basic knowledge of the device default password and any security restrictions for configuration.  
- A Plaspy account ready to receive and validate the device once it reports.

## How This Tracker Connects to Plaspy

The Ublox 7 Mini can send GNSS and telemetry to Plaspy using SMS or GPRS over TCP/UDP. When GPRS is used the device is configured to target the shared Plaspy server endpoint and port so incoming device data is attributed and parsed automatically by Plaspy.

- The device sends position and telemetry to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.  
- Plaspy detects the tracker protocol automatically and ingests messages without requiring a per-device custom port.  
- Events such as ignition ON/OFF, overspeed, and alarms are forwarded to Plaspy for mapping and alerts.  
- Using GPRS (TCP/UDP) provides real-time updates; SMS can be used for simpler or backup workflows.  
- Once reporting is active, Plaspy shows live location, history and telemetry for operational monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send vendor SMS commands as documented by TopShine.  
2. Confirm the device IMEI and note the IMEI digits needed for device ID configuration.  
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.  
4. Set port 8888 as the GPRS server port (Plaspy uses the same port for all devices).  
5. Choose UDP or TCP transport if the device requires a transport selection.  
6. Configure the operator APN and any APN username or password required by the SIM.  
7. Apply or save the configuration and restart the device if the device requires a reboot to enable GPRS.  
8. Validate that the tracker reports to Plaspy and appears in the platform as expected.

## Example Configuration Commands

The manufacturer provides SMS-based commands for public configuration. The tracker default password used in these examples is 000000. Preserve placeholders when sending commands from your SMS tool.

1. Optional initial factory reset (use only when required)
```
W000000,990,099###
```
- Resets device to factory defaults. Label this step optional and perform only when necessary.

2. Set the device ID (the manufacturer instruction uses the first 14 IMEI digits; confirm IMEI handling for your deployment)
```
W000000,010,{{('XXXXXXXXXXXXXX' + imei.substring(0,14)).slice(-14)}}
```
- Replace the template with the actual 14-digit value derived from the device IMEI. Confirm how your device expects the ID string; some deployments use the full IMEI for platform mapping.

3. Set the operator APN (use placeholders as needed)
```
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} = mobile operator APN  
- {{apnu}} = APN username (optional)  
- {{apnp}} = APN password (optional)  
- If no username/password are required, omit the optional fields per device syntax.

4. Set the GPRS server to Plaspy (public IP and port shown)
```
W000000,012,54.85.159.138,8888
```
- You may instead configure the server as d.plaspy.com if the device accepts domain names. Either the domain or the IP is acceptable; ensure port 8888 is used.

5. Switch device to GPRS mode
```
W000000,013,2
```
- Command to enable GPRS reporting mode per manufacturer instructions.

6. Set the position update interval
```
W000000,014,6
```
- Example interval command; verify the meaning of the value (seconds, minutes, or a code) in manufacturer docs.

7. Query device IMEI for verification
```
W000000,601
```
- Use this command to request the device IMEI from the tracker.

Notes on placeholders and defaults:
- The SMS examples above use the default device password 000000 as provided by the public manufacturer configuration snippet. Replace the password if your device has been changed.
- Keep the command order when following the example workflow: ID/APN/server/mode/interval, and verify each step via device responses.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or supported parameters; always verify the command set for your exact device version.  
- The Ublox 7 supports both SMS and GPRS configuration methods; SMS commands are commonly used where a software tool is not available.  
- When choosing TCP versus UDP, consider network stability and data delivery characteristics; Plaspy accepts either and detects the protocol automatically.  
- Plaspy uses the same port 8888 for all devices; this simplifies server configuration on the tracker side.  
- If a device accepts domain names, you may use d.plaspy.com instead of the IP address; confirm DNS resolution on the tracker network.

## Why Use Plaspy with This Configuration

Using the Ublox 7 Mini with Plaspy gives visibility into small vehicles and assets with a compact, rugged tracker that supports open protocol communication. By configuring the tracker to report to Plaspy you enable real-time location, alarms, and operational telemetry that fleet operators can use for monitoring, alerts, and historical reporting.

To learn more about Plaspy and how it ingests tracker data, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes and detailed technical specifications, verify the current information on the manufacturer site https://www.gztopshine.com/ since setup methods and device behavior can change over time.
