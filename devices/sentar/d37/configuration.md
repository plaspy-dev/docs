---
slug: /sentar/d37/configuration
id: d37-configuration
sidebar_label: Configuration
title: Sentar - D37 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Sentar D37 GPS watch showing Plaspy server settings and practical configuration steps
keywords:
  - Sentar D37 configuration
  - Sentar D37 setup
  - D37 Plaspy configuration
  - Sentar GPS tracker configuration
  - D37 tracking software configuration
  - Sentar D37 server configuration
  - D37 GPS platform setup
  - Plaspy device configuration
  - Sentar smartwatch configuration
  - child tracker Plaspy setup
---

# Sentar - D37 Configuration

This page documents the public configuration context for using the Sentar D37 kids smart watch with Plaspy. It focuses on the practical, public-facing settings you will apply on the device so the D37 can report location and status to Plaspy dashboards. The guidance below pulls together the D37 description and the publicly available SMS configuration commands provided by the manufacturer to illustrate a common setup flow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so apply these public settings carefully and confirm device-specific differences with Sentar documentation. Where available, this guide includes the SMS commands that have been published for the D37 to help you set the server endpoint, APN, reporting interval, and verify the device state.

## Configuration Overview

The goal of the configuration process is to prepare the D37 watch to communicate reliably with Plaspy and validate that telemetry and location updates appear on the platform. For the D37 this commonly involves using SMS configuration commands to set the APN, point the device at Plaspy servers, and choose a transport protocol.

- Set the D37 to report to the Plaspy server endpoint so Plaspy can ingest location and telemetry.
- Configure the operator APN and any required credentials so the watch has mobile data connectivity.
- Point the device at d.plaspy.com or the Plaspy server IP and assign port 8888 used by Plaspy.
- Choose UDP or TCP transport on the device if required, matching how you want the watch to send packets.
- Validate the device is sending updates to Plaspy and that the device appears in your Plaspy dashboard.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are both supported by the device and Plaspy accepts either
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A charged Sentar D37 watch with an active Nano SIM installed and mobile data enabled.
- Access to send SMS commands from a phone or SMS gateway if the device is configured by SMS.
- APN details and any APN username or password required by the mobile operator.
- Knowledge of the device admin password; the sample public configuration uses the default password 123456.
- Access to the official Sentar configuration method or support materials to confirm firmware specific command syntax.
- A Plaspy account and access to the Plaspy dashboard to confirm the device appears and reports.

## How This Tracker Connects to Plaspy

The D37 transmits location and device telemetry over cellular data to the Plaspy server endpoint. Once configured to send telemetry to the shared Plaspy address and port, Plaspy will ingest location fixes and device events and display them in monitoring dashboards.

- The D37 is configured to report to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.
- Transport can be UDP or TCP; select the transport supported by the device or operator and match it to the configuration.
- Plaspy automatically detects the device protocol when the tracker connects, simplifying device onboarding.
- Location updates, SOS events, and basic device telemetry are forwarded to Plaspy for live tracking and alerting.
- After configuration, validate that the watch shows up as an active device in Plaspy and that location samples arrive.

## Common Configuration Workflow

1. Access the official Sentar configuration method for the D37 (SMS commands, manufacturer app, or vendor tool) and confirm command syntax for your firmware.
2. Prepare operator APN details and any credentials (use placeholders such as [apn], [apnu], [apnp] where needed).
3. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device configuration.
4. Set port 8888 for the device reporting port; all Plaspy devices use the same port.
5. Choose UDP or TCP transport on the device if it requires an explicit choice.
6. Apply or save the configuration and restart the device if the D37 requires a reboot to apply settings.
7. Validate the device reports to Plaspy by checking for incoming telemetry and verifying the device appears in the Plaspy dashboard.

## Example Configuration Commands

The following SMS commands are taken from public Sentar D37 configuration material. They assume the device password is the default 123456. Keep the order where indicated; the factory reset command is optional and typically used only when you need to clear prior settings.

- Factory reset (optional initial step)
```text
pw,123456,factory#
```

- Set the time zone to UTC 0
```text
pw,123456,lz,0,0#
```

- Check the MCC and MNC (operator codes)
```text
pw,123456,imsi#
```

- Set the operator APN
Note: [apn] is the APN name, [apnu] is the APN username if required, and [apnp] is the APN password if required. Replace xxxyy with the concatenated MCC and MNC codes if required by the command.
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Set the GPRS server to the Plaspy server IP and port
(If the device requires the token ip before the address, use the pattern shown)
```text
pw,123456,ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds
```text
pw,123456,upload,300#
```

- Verify current settings
```text
pw,123456,ts#
```

If your device accepts a domain name instead of an IP, replace the IP with d.plaspy.com in the appropriate command. Always confirm the exact SMS formatting required by your device firmware before sending commands.

## Configuration Notes

- SMS based configuration is a common public method for the D37; ensure your SMS source can send messages to the watch and that the device accepts the SMS configuration syntax for your firmware.
- Firmware and hardware revisions may change command syntax and available options; verify commands against current Sentar documentation.
- Choose UDP or TCP according to device support and network behavior; Plaspy accepts both and automatically detects the protocol.
- Preserve placeholders such as [apn], [apnu], and [apnp] when documenting and replace them with operator values when performing the setup.
- If a factory reset is used, consider it optional and only perform it when you need to clear previous configuration.

## Why Use Plaspy with This Configuration

Configuring the Sentar D37 to report to Plaspy provides centralized, real time visibility for location, SOS events, and basic device telemetry that parents and administrators can use for monitoring and rapid response. The D37's multi mode positioning and Plaspy's shared server setup simplify onboarding so devices can start reporting quickly once APN and server settings are applied.

Learn more about Plaspy and how it handles device telemetry and tracking on the main website https://www.plaspy.com. For the most current and device specific configuration methods, firmware notes, and manufacturer details please verify information on the Sentar official website http://www.sentarsmart.com/ as device behavior and commands may change over time.
