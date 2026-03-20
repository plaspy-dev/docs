---
slug: /concox/gk309e/configuration
id: gk309e-configuration
sidebar_label: Configuration
title: Concox - GK309E Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Concox GK309E with Plaspy including server settings, SMS commands, and setup workflow
keywords:
  - Concox GK309E configuration
  - GK309E setup
  - Concox GK309E server configuration
  - GK309E Plaspy setup
  - Concox GPS tracker configuration
  - GPS tracker setup Plaspy
  - GK309E SMS configuration
  - Concox kids phone tracking
  - GPS platform setup
  - tracker server configuration
---

# Concox - GK309E Configuration

This page provides the public configuration context for using the Concox GK309E with the Plaspy platform. It focuses on the shared Plaspy server settings, practical setup information published for this model, and the typical SMS commands used to point the tracker at Plaspy. Use this as a technical reference when preparing a GK309E device for use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GK309E supports SMS-based configuration steps in public documentation; follow the commands below as a starting point and confirm any device-specific details with the manufacturer.

## Configuration Overview

Configuring a GK309E for Plaspy ensures the device can establish a GPRS data session and send location and status updates to Plaspy's shared server endpoint and port. The goal is to set APN and server parameters, enable data reporting, and verify the tracker appears in the Plaspy platform.

- Point the device to the Plaspy server endpoint so it can transmit telemetry to the platform
- Configure the APN and enable GPRS so the device can use mobile data for reporting
- Set an appropriate reporting interval so position updates appear at the desired cadence
- Validate connectivity using the device verification command and confirm visibility in Plaspy
- Use SMS-based commands or the official Concox tools depending on your installer workflow

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888 (choose the transport the device requires)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A valid SIM card with a data plan and SMS capability installed in the GK309E  
- APN credentials for the SIM operator (use the APN command placeholder [apn] and optional [apnu] and [apnp] fields if required)  
- Access to a phone or management tool able to send configuration SMS messages to the device, or the official Concox configuration utility if preferred  
- Power or a charged battery and a stable installation position so the device can acquire GNSS and GPRS connectivity  
- Access to Plaspy platform to confirm the tracker reports after configuration

## How This Tracker Connects to Plaspy

The GK309E is configured to initiate a GPRS connection and send location and device data to the Plaspy shared server endpoint and port. Once configured, Plaspy receives the device messages and automatically determines the tracker protocol, making platform-side setup straightforward.

- The device uses GPRS data to open a session and transmit periodic position updates to d.plaspy.com or 54.85.159.138 on port 8888  
- Transport can be UDP or TCP depending on the device requirement and your choice during configuration  
- Plaspy detects the protocol automatically and processes inbound tracker messages for visibility and event reporting  
- The tracker’s reporting interval controls how frequently Plaspy receives updates and shows live position on the platform

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for GK309E this commonly means sending SMS configuration commands or using Concox tools).  
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 (the port used by Plaspy for all devices).  
4. Choose UDP or TCP if the device requires an explicit transport selection.  
5. Configure the APN and other GPRS parameters required by your mobile operator.  
6. Apply or save the configuration and restart the device if required by the firmware.  
7. Validate that the device reports to Plaspy and appears in the platform; use the device verification command where available.

## Example Configuration Commands

The GK309E public configuration can be performed by sending SMS commands to the device. Below are the commonly published commands in order. Preserve placeholders exactly where required.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC+0:
```text
GMT,E,0#
```

- Set the mobile operator APN (replace [apn] and optional [apnu] and [apnp] as needed):
```text
APN,[apn]#, 
```
If your operator requires username and password, include them as:
```text
APN,[apn],[apnu],[apnp]#
```
(Placeholders: [apn] = APN name, [apnu] = APN username, [apnp] = APN password.)

- Set the GPRS server to Plaspy by domain (public example using domain):
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy by IP (alternate public example using IP):
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting/update interval to every 60 seconds (two variants shown in public docs):
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode so the device uses the configured APN and server:
```text
GPRSON,1#
```

- Check current GPRS and server parameter settings (verification command):
```text
GPRSSET#
```

Notes on sending commands:
- Send each command as a separate SMS to the device phone number.  
- Keep the order when performing a full initial setup: APN, SERVER, TIMER, then enable GPRS.  
- Use the SERVER command version that matches your preference for domain or IP. Both target Plaspy on port 8888.  
- If you need to reset to factory defaults, use FACTORY# first; label this as optional and only use when appropriate.

## Configuration Notes

- Firmware and hardware revisions may change available commands or command syntax; always confirm with Concox documentation for your device revision.  
- The GK309E supports SMS-based configuration as shown, but installers may also use Concox software tools when available.  
- Choose UDP or TCP according to your installer requirements; Plaspy accepts either on port 8888 and will auto-detect the protocol.  
- All devices reporting to Plaspy use the same port, which simplifies server-side configuration for multi-device deployments.  
- Verify APN credentials and data availability before enabling GPRS to avoid failed connection attempts.

## Why Use Plaspy with This Configuration

Using the Concox GK309E with Plaspy provides a straightforward path to remote visibility and monitoring for organizations or families that need consistent position and status reporting. Configuring the device to report to Plaspy’s shared server endpoint makes it possible to centralize tracking, alerts, and operational oversight in one platform.

To learn more about Plaspy and how it handles incoming tracker data, visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest instructions on the official Concox website https://www.iconcox.com/.
