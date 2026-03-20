---
slug: /topten/mt05/configuration
id: mt05-configuration
sidebar_label: Configuration
title: TopTen - MT05 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TopTen MT05 tracker showing Plaspy server settings and SMS commands for quick setup and validation
keywords:
  - TopTen MT05 configuration
  - TopTen MT05 setup
  - TopTen MT05 Plaspy
  - MT05 server configuration
  - MT05 GPS tracker setup
  - TopTen tracker configuration
  - vehicle tracking MT05
  - GPS platform configuration MT05
  - trackers Plaspy setup
  - MT05 SMS configuration
---

# TopTen - MT05 Configuration

This page provides public configuration guidance for using the TopTen MT05 mini GPS tracking device with the Plaspy platform. It collects the relevant, publicly available settings and SMS command examples that are commonly used to point MT05 devices to Plaspy so the device can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Manufacturer-side steps for setting APN, server, and other parameters can vary by firmware, hardware revision, installation method, and vendor tools. The MT05 supports SMS-based configuration in the examples below, so adjust the exact workflow to match your device firmware and the SIM/APN details you use.

## Configuration Overview

This configuration prepares the MT05 to send its GPS and status data to the Plaspy backend using the shared Plaspy endpoint and port. The public commands below show how to set the GPRS/APN and server parameters by SMS, and how to verify the applied settings.

- Configure the device APN and GPRS server so it can use mobile data to reach Plaspy.
- Point the device to the Plaspy server endpoint so reported positions appear in Plaspy.
- Validate the device identifier and server response so Plaspy can associate incoming data with the tracker.
- Use the provided SMS commands to reset, apply, and check configuration when SMS setup is supported.
- Verify connectivity and reporting in Plaspy after configuration to ensure visibility and monitoring.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy server settings used for MT05 configuration and are required in the examples and workflow below.

## Typical Requirements Before Setup

- Device powered and installed or accessible for initial setup.
- Active SIM card installed with data or SMS capability and known APN credentials.
- Knowledge of the device IMEI so you can determine the tracker identifier (MT05 uses the IMEI in its PAR output).
- Ability to send SMS commands to the device from an authorized phone number.
- Access to the manufacturer's SMS command format or configuration tool and any device SMS password.
- Confirmation of current firmware behavior from the vendor when possible.

## How This Tracker Connects to Plaspy

The MT05 reports location and state to the Plaspy endpoint after it is configured with the Plaspy server address and port. Plaspy receives device messages and maps them to a tracker identifier so the device becomes visible in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint and port.
- Reports are sent over mobile data (GPRS) after APN and server are set, or via SMS where supported for certain messages.
- Plaspy matches incoming data to the tracker identifier derived from the IMEI (last 14 digits as shown in the device PAR output).
- Plaspy automatically detects the device protocol so you only need to point the device to d.plaspy.com or the Plaspy server IP and use the common port.
- After configuration, events and status updates appear in Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official TopTen configuration method for the MT05 (SMS commands as shown in manufacturer guidance or vendor configuration software).
2. Obtain the device IMEI and identify the tracker ID (the MT05 reports the ID corresponding to the last 14 digits of the IMEI in the PAR output).
3. Enter the Plaspy server address either as domain d.plaspy.com or the server IP 54.85.159.138 when configuring the device.
4. Set the port to 8888 in the device settings.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and send the SMS commands required by the device.
7. Restart or power cycle the device if the manufacturer recommends it.
8. Validate the device reports to Plaspy and confirm the tracker appears and updates in the platform.

## Example Configuration Commands

The MT05 can be configured via SMS using the command format provided by TopTen. Below are the public command examples extracted from manufacturer guidance. The commands in these examples use an SMS password prefix shown as 111111; replace this prefix with your device password if different.

- Optional initial factory reset (use only when needed):
```text
111111CLR
```

- Set APN and Plaspy GPRS server (example). Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your SIM provider values:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explanation of placeholders:
- {{apn}} — your mobile network APN name
- {{apnu}} — APN username if required (leave empty if not used)
- {{apnp}} — APN password if required (leave empty if not used)

- Check or query current WWW/GPRS settings:
```text
111111WWW:
```

Notes:
- The example uses the Plaspy server IP 54.85.159.138 and port 8888. You may substitute d.plaspy.com where the device accepts a domain name.
- The RPT, SLP, and RUN parameters shown are device parameters included in the manufacturer example. Keep them as required by your firmware or adjust per vendor documentation.

## Configuration Notes

- Firmware variations may change the exact command syntax; always confirm the SMS format for your MT05 firmware version.
- The MT05 supports SMS-based configuration in the public examples; vendor tools or a configuration app may offer an alternative workflow.
- Choose TCP or UDP based on device capability; Plaspy supports both and will auto-detect the protocol on connection.
- Use the same Plaspy port 8888 for all devices configured to report to Plaspy; the platform uses a shared port for incoming device connections.
- Keep APN credentials handy and verify the SIM has data and SMS enabled before applying GPRS server settings.

## Why Use Plaspy with This Configuration

Using the TopTen MT05 with Plaspy provides a straightforward way to centralize location, status, and alert data from a fleet of devices into a single platform. By pointing the MT05 to Plaspy's shared server and port, organizations gain continuous visibility, consolidated event reporting, and easier operational oversight without managing device-level server diversity.

To learn more about Plaspy and how it can manage trackers like the TopTen MT05, visit https://www.plaspy.com. For the latest device-specific configuration details, firmware notes, and manufacturer instructions verify information on the TopTen site http://www.t10.cn as vendor documentation may change over time.
