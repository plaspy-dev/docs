---
slug: /concox/jm_vl04/configuration
id: jm_vl04-configuration
sidebar_label: Configuration
title: Concox - JM-VL04 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox JM-VL04 for use with Plaspy including required server settings and example SMS commands
keywords:
  - Concox JM-VL04 configuration
  - Concox JM-VL04 setup
  - JM-VL04 server configuration
  - JM-VL04 Plaspy setup
  - Plaspy GPS tracker setup
  - Concox GPS tracker configuration
  - vehicle tracker configuration guide
  - JM-VL04 SMS configuration
  - OBD tracker configuration
  - fleet tracking platform configuration
---

# Concox - JM-VL04 Configuration

This page covers the public configuration context for using the Concox JM-VL04 with the Plaspy platform. It compiles the Plaspy server settings and the device-level commands commonly used in public documentation to prepare the tracker for reporting to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation method, and vendor tools, so use this page as a practical guide and confirm device-specific details with the manufacturer where needed.

## Configuration Overview

The goal of this configuration is to prepare a JM-VL04 device so it can reliably communicate location and status to the Plaspy platform. Using the public commands shown below (SMS-based configuration), you set the APN, target server, transport, and update timing so the device reports to the shared Plaspy endpoint.

- Configure the device APN and GPRS parameters so the tracker has data connectivity.
- Point the tracker to the Plaspy server endpoint and set the transport and port.
- Set an appropriate reporting interval so the device sends periodic updates to Plaspy.
- Enable GPRS mode and confirm the tracker stores the settings.
- Verify connectivity and that the device appears in Plaspy using the platform's device view.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Ensure the JM-VL04 has a working SIM card with data and SMS enabled for the target network and valid APN settings.
- Device powered and connected to the vehicle OBD port or appropriate power source so configuration commands are accepted.
- Access to the manufacturer's configuration method — for JM-VL04 the publicly documented SMS commands are commonly used.
- Knowledge of your mobile operator APN values; placeholders such as [apn], [apnu], and [apnp] may be required in commands.
- A means to send SMS messages to the tracker from the installer or admin phone.
- If available and preferred, BLE configuration via the device's configuration app or tool may also be used per the manufacturer guide.

## How This Tracker Connects to Plaspy

The JM-VL04 is configured to report data to the Plaspy shared server endpoint and port. Once APN and server information are set, the tracker establishes a GPRS data session and sends periodic location and status messages to Plaspy. Plaspy receives the connection on the shared port and uses automatic protocol detection to interpret the tracker data.

- Device uses configured APN to obtain GPRS data connectivity.
- Tracker opens a TCP or UDP connection to d.plaspy.com or the Plaspy server IP on port 8888.
- Plaspy automatically detects and decodes the tracker protocol when the device connects.
- Periodic updates and event messages are sent to Plaspy at the configured TIMER interval.
- Platform visibility and monitoring happen once the device successfully reports to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the JM-VL04 (SMS commands, BLE tool, or vendor utility).
2. Ensure the SIM card is inserted and the APN is known; set the APN using the manufacturer's command format.
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device server settings.
4. Set the server port to 8888 and choose UDP or TCP if the tracker requires a transport selection.
5. Enable GPRS mode and set a reporting interval (for example 60 seconds) and save or apply the configuration.
6. Restart or power cycle the device if required by the device to apply changes.
7. Validate the device reports to Plaspy and appears in the platform by checking device activity in Plaspy.

## Example Configuration Commands

The JM-VL04 public configuration can be performed by sending SMS commands to the device. The following commands are taken from public manufacturer guidance and are shown in order. Keep the exact command syntax as provided by the device documentation.

1. Optional factory reset (use only when needed or for initial setup)
```text
FACTORY#
```

2. Set the time zone to UTC+0
```text
GMT,E,0#
```

3. Set the APN for your mobile operator (preserve placeholders)
```text
APN,[apn]{{apnu ? ',' + [apnu] + ',' + [apnp] : ''}}#
```
- Explanation: Replace [apn] with your operator APN. If your operator requires username and password use the optional placeholders [apnu] and [apnp] as provided by the manufacturer. (Keep the comma-separated format if credentials are required.)

4. Set the GPRS server to use the Plaspy domain (UDP/TCP selection is managed by device transport settings)
```text
SERVER,1,d.plaspy.com,8888,0#
```
or set the server to the Plaspy IP address
```text
SERVER,0,54.85.159.138,8888,0#
```
- Explanation: Use the domain form to rely on DNS or the IP form if DNS is unavailable. Port must be 8888.

5. Set the update timer to 60 seconds
```text
TIMER,60#
```
or alternative timer format
```text
TIMER,60,60#
```

6. Enable GPRS mode
```text
GPRSON,1#
```

7. Verify current GPRS parameters
```text
GPRSSET#
```
- Explanation: Send GPRSSET# to request the device to reply with the current GPRS configuration so you can confirm APN, server, port, and timer values.

Note: Preserve the order when applying APN and server settings where required by the device. The APN command should be set before enabling GPRS in many workflows.

## Configuration Notes

- The JM-VL04 supports SMS-based configuration as shown in the public manufacturer commands; BLE or vendor tool configuration may also be available depending on the device firmware.
- Different firmware revisions or regional variants can alter command formats or available parameters; always confirm the syntax with the device manual.
- You can point the device to d.plaspy.com or the Plaspy server IP; either is acceptable but using the domain allows DNS resolution if the IP changes.
- Choose UDP or TCP on the device if prompted; Plaspy accepts connections over either transport on port 8888 and will auto-detect the tracker protocol.
- All devices on Plaspy use the same port 8888 which simplifies multi-model deployments and server-side configuration.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured Concox JM-VL04 provides a straightforward path to real-time visibility and fleet monitoring. The public commands above prepare the tracker to report reliably to Plaspy, enabling location updates, operational monitoring, and integration into fleet workflows. For organizations that need consistent reporting and centralized visibility, pointing JM-VL04 devices at the Plaspy server centralizes telemetry using a shared, detected protocol approach.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup methods can change over time; verify the latest device-specific configuration details on the Concox website https://www.iconcox.com/ before wide deployment.
