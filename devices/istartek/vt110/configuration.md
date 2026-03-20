---
slug: /istartek/vt110/configuration
id: vt110-configuration
sidebar_label: Configuration
title: iStartek - VT110 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for iStartek VT110 and how to connect it to Plaspy using shared server settings
keywords:
  - iStartek VT110 configuration
  - iStartek VT110 setup
  - VT110 Plaspy configuration
  - Plaspy GPS tracker setup
  - VT110 server configuration
  - iStartek tracker configuration
  - VT110 SMS commands
  - vehicle tracking configuration
  - fleet tracking setup
  - GPS tracker Plaspy integration
---

# iStartek - VT110 Configuration

This page covers the public configuration context for using the iStartek VT110 tracker with Plaspy. It focuses on the practical server and device settings required so the VT110 can report position and event data into Plaspy without attempting to replace the manufacturer's documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware revision, hardware variant, installation method, and vendor tools. Where available we include the VT110 SMS configuration commands that are commonly used to set server, APN, timing, and to verify parameters.

## Configuration Overview

The goal of configuration is to prepare the VT110 so it can reliably communicate with the Plaspy fleet platform, report location and event data, and appear in the Plaspy interface for live monitoring and reporting.

- Configure GPRS and server parameters so the device sends data to Plaspy.
- Set reporting intervals to match your monitoring and network usage needs.
- Verify mobile connectivity and any required APN settings for the installed SIM.
- Validate the device is visible and reporting correctly in Plaspy after configuration.
- Keep device firmware and manufacturer instructions in mind when applying settings.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the VT110:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using either UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These settings are the shared endpoint values Plaspy provides for supported GPS trackers and should be entered exactly as shown in the VT110 configuration method you use.

## Typical Requirements Before Setup

- A compatible 2G SIM card installed and activated for GPRS data and SMS if SMS configuration is used.
- Access to the VT110 installation location and power, or a charged internal backup battery for safe configuration.
- Familiarity with the manufacturer configuration method for the VT110 such as SMS commands or vendor software.
- Valid APN information for the mobile operator serving the SIM card.
- Ability to receive and send SMS from the phone number used to provision the tracker if using SMS commands.

## How This Tracker Connects to Plaspy

The VT110 is configured to send periodic location and event messages to the Plaspy shared server endpoint and port so the platform can present live location, alerts, and historical data.

- The device sends GNSS and GSM-based position fixes to Plaspy at configured intervals.
- Telemetry such as mileage, heading, ACC (ignition) events, and alarm signals are reported to the Plaspy endpoint.
- Plaspy receives the incoming connection on port 8888 and automatically determines the device protocol.
- Once the server and APN are set, the tracker will appear in Plaspy for monitoring, alerts, and reporting.
- You can choose UDP or TCP transport on the device if required; Plaspy supports both and detects protocol automatically.

## Common Configuration Workflow

1. Access the official iStartek configuration method for the VT110 (SMS commands or vendor tool) according to the device instructions.
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport on the device if it asks for a transport selection.
5. Configure the APN for the installed SIM and set any required operator authentication.
6. Apply or save the configuration and restart the VT110 if the device requires a reboot to activate settings.
7. Validate that the device reports to Plaspy by checking device status in the platform and using the device PARAM check command if available.

## Example Configuration Commands

The VT110 supports SMS-based configuration. Below are commonly used public SMS commands in the order typically applied. Send each command as an SMS from the authorized phone number to the tracker.

1. Optional initial factory reset (use only when needed)
```text
FACTORY#
```

2. Set the time zone to UTC+0
```text
GMT,E,0#
```

3. Set the operator APN
```text
APN,{{apn}}{{#if apnu}},{{apnu}}{{/if}}{{#if apnp}},{{apnp}}{{/if}}#
```
- Explanation: Replace {{apn}} with your mobile operator APN. If your operator requires username and password, include {{apnu}} and {{apnp}} respectively. Keep the placeholder format if you use a provisioning tool that substitutes values.

4. Set the GPRS server to use the Plaspy domain and port (preferred, readable)
```text
SERVER,1,d.plaspy.com,8888#
```

5. Alternative: set the GPRS server using the Plaspy server IP and port
```text
SERVER,0,54.85.159.138,8888#
```

6. Set the reporting interval to every 60 seconds
```text
TIMER,60#
```

7. Verify current parameters
```text
PARAM#
```

Note: Preserve the trailing hash symbol (#) when sending SMS commands. Use the DOMAIN form (d.plaspy.com) for easier maintenance; the IP form is provided as an alternative.

## Configuration Notes

- SMS-based configuration is commonly supported for the VT110; check whether your firmware requires SMS or a vendor configuration tool before proceeding.
- Firmware and hardware revisions can change command syntax or additional features; always confirm command compatibility for your device revision.
- Choose TCP or UDP transport according to your network preferences; Plaspy supports both and will auto-detect the incoming protocol on port 8888.
- Use the domain form d.plaspy.com when possible to allow the platform to manage backend IP changes; use the IP entry only if DNS is restricted in your environment.
- When applying factory reset commands, label that step as optional and use it only for troubleshooting or initial provisioning as recommended by the manufacturer.

## Why Use Plaspy with This Configuration

Configuring the VT110 to report to Plaspy gives fleet managers and operators reliable visibility into vehicle location, trip events, and alarms using a single shared server endpoint. The combination of GNSS and GSM base station positioning with configurable reporting intervals helps balance timeliness of updates with network usage for operational monitoring and incident response.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device-specific commands, firmware notes, and hardware information verify details with the manufacturer at https://istartek.com/ since setup methods and firmware behavior can change over time.
