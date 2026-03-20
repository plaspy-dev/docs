---
slug: /concox/jm_vg01u/configuration
id: jm_vg01u-configuration
sidebar_label: Configuration
title: Concox - JM-VG01U Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Concox JM-VG01U for Plaspy with shared server settings SMS commands and practical setup guidance
keywords:
  - Concox JM-VG01U configuration
  - Concox JM VG01U setup
  - JM-VG01U Plaspy setup
  - JM-VG01U server configuration
  - Concox GPS tracker configuration
  - JM-VG01U SMS commands
  - GPS tracker Plaspy integration
  - vehicle tracker configuration
  - fleet tracker Concox setup
  - GNSS INS tracker configuration
---

# Concox - JM-VG01U Configuration

This page summarizes public configuration guidance for using the Concox JM-VG01U tracker with Plaspy. It focuses on the shared Plaspy server settings and the practical steps you can take to prepare the JM-VG01U to report telemetry and events into the Plaspy backend. Where available, common SMS commands provided by the manufacturer are included in the example commands section.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The JM-VG01U supports SMS and GPRS configuration flows in public documentation; use the official Concox configuration method appropriate for your device and firmware when applying the values shown here.

## Configuration Overview

The goal of configuration is to connect the JM-VG01U to Plaspy so the device reliably sends its position and event data to the platform. Typical configuration establishes the GPRS server / SMS settings, sets APN details, and chooses the transport type so Plaspy can ingest device telemetry on the shared endpoint and port.

- Point the tracker to the Plaspy server endpoint and port so it reports location and events to Plaspy.
- Configure the APN and enable GPRS so cellular data is allowed for reporting.
- Choose UDP or TCP transport if required by the device firmware and save the setting.
- Set an appropriate upload timer so Plaspy receives regular position updates.
- Validate the tracker is visible in Plaspy after reboot or reconnect and troubleshoot using the verification command.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: UDP or TCP can be used on port 8888 depending on device preference  
- Plaspy automatically detects the tracker protocol so devices can be accepted without manual protocol selection on the server side

## Typical Requirements Before Setup

- A powered JM-VG01U installed or connected to a bench power source for configuration and testing.  
- An active Micro SIM with data enabled and the correct APN for the mobile operator. The APN may require username and password placeholders such as {{apnu}} and {{apnp}}.  
- Access to the device configuration method supported by your unit and firmware such as SMS commands or manufacturer software.  
- A known SMS-capable phone number to send configuration SMS commands if using SMS setup.  
- Basic knowledge of whether your deployment requires UDP or TCP transport and a plan to validate connectivity after changes.

## How This Tracker Connects to Plaspy

When configured, the JM-VG01U sends GNSS position, inertial sensor derived motion events, and digital input events over the cellular GPRS link to the Plaspy server. The tracker is set to report to the shared Plaspy server endpoint and port so Plaspy receives and processes the telemetry stream.

- The device reports position and status packets to d.plaspy.com (or the Plaspy server IP) on port 8888.  
- Event inputs such as ACC ignition, SOS, and relay actions are forwarded to Plaspy for alerting.  
- INS and motion sensor events are included in the telemetry stream for driving behavior and safety analytics.  
- Plaspy receives regular updates based on the configured TIMER interval and shows the device as active in the platform.  
- All Plaspy-supported devices use the same port and the platform automatically detects the incoming device protocol.

## Common Configuration Workflow

1. Access the official Concox configuration method for your JM-VG01U unit such as SMS commands or vendor configuration tool.  
2. Enter the Plaspy server address either d.plaspy.com or 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 (note that Plaspy uses the same port across devices).  
4. If your device requires a transport selection, choose UDP or TCP according to the device UI or installer preference.  
5. Configure the operator APN and any APN username or password placeholders as required for the SIM.  
6. Apply or save the configuration and, if required by the device, restart the tracker to activate the new settings.  
7. Validate connectivity by checking that the device reports to Plaspy and use the device verification command if available.

## Example Configuration Commands

The JM-VG01U supports SMS-based configuration. The following commands reflect the public SMS commands documented for the model. Preserve placeholders when substituting your operator APN and credentials.

- Optional initial factory reset (only use if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC+0:
```text
GMT,E,0#
```

- Set the operator APN (replace {{apn}} with your operator APN; include {{apnu}} and {{apnp}} if your APN requires a username or password):
```text
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
Note: Use the form with {{apnu}} and {{apnp}} only if your network requires APN credentials. The placeholder syntax above preserves the optional username and password fields.

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP on port 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the upload interval to every 60 seconds (short form):
```text
TIMER,60#
```

- Or set the upload interval with two parameters if required by firmware:
```text
TIMER,60,60#
```

- Enable GPRS mode:
```text
GPRSON,1#
```

- Verification command to check current GPRS parameters:
```text
GPRSSET#
```

Follow the exact SMS syntax required by your firmware. Some firmware revisions may expect slightly different delimiters or parameter orders; always confirm with the manufacturer documentation if a command does not behave as shown.

## Configuration Notes

- SMS based configuration is a common public method for this model, but manufacturer tools or configuration software may also be available; use the method appropriate to your installation.  
- Firmware versions and hardware revisions can change command syntax or available parameters; verify commands against the device firmware you have.  
- Choose UDP or TCP according to installer preference; both transports are supported and Plaspy will accept packets on port 8888 and auto detect the protocol.  
- Keep APN credentials accurate; incorrect APN settings are the most common cause of failed GPRS connectivity. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with operator values when required.  
- After applying settings, reboot the tracker if the device requires it and confirm visibility in Plaspy using the verification command and platform device status.

## Why Use Plaspy with This Configuration

Using the JM-VG01U with Plaspy gives fleet operators a compact INS-aided GNSS tracker that feeds position, inertial events, and input-based alerts into a single platform. That combination helps teams maintain visibility, receive timely safety notifications, and analyze mileage and behavior data to support operational decisions.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. Please verify the latest device specific configuration details and firmware behavior on the manufacturer site https://www.iconcox.com/ since setup methods and command syntax can change with new firmware and hardware revisions.
