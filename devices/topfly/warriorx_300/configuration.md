---
slug: /topfly/warriorx_300/configuration
id: warriorx_300-configuration
sidebar_label: Configuration
title: TopFly - WarriorX 300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly WarriorX 300 with Plaspy server settings and SMS commands
keywords:
  - TopFly WarriorX 300 configuration
  - WarriorX 300 setup
  - WarriorX 300 Plaspy
  - TopFly tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - asset tracker setup guide
  - server configuration for trackers
  - GPS platform setup
  - WarriorX 300 SMS commands
---

# TopFly - WarriorX 300 Configuration

This page covers the public configuration context for using the TOPFLYtech WarriorX 300 with Plaspy. It explains the practical steps and public settings required to point the WarriorX 300 at Plaspy servers, including the example SMS-based commands provided in the device documentation and the shared server values Plaspy uses to receive telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so this guide focuses on the public, practical actions you can use to integrate the WarriorX 300 with Plaspy while referencing the official TopFly configuration approach.

## Configuration Overview

The goal of configuration is to prepare the WarriorX 300 so it reliably reports GNSS and telemetry to Plaspy and becomes visible in the platform. For this model, manufacturer documentation provides a simple SMS command flow to set time zone, APN, the GPRS server address and reporting interval. Applying these public settings ensures the tracker can establish a cellular data session and send location and event updates to Plaspy.

- Ensure the tracker can register on a cellular network and has correct APN settings.
- Configure the device to report to the Plaspy server endpoint and port.
- Set reporting intervals appropriate to your battery life and monitoring needs.
- Validate connectivity and confirm the device appears in Plaspy after configuration.
- Use the provided SMS commands or the vendor configuration tool according to the device firmware.

## Plaspy Server Settings

- Server domain d.plaspy.com is the public server endpoint used for Plaspy integration.
- Server IP 54.85.159.138 is the numeric address that can be used where IP is required.
- Port 8888 is the port that Plaspy uses for all devices.
- Transport support for UDP or TCP is available; the device may be configured to use either UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol when a device connects to the server endpoint.

## Typical Requirements Before Setup

- A SIM card enabled for data and SMS as required by your cellular operator and device configuration.
- APN credentials for the cellular operator including APN name and optional username and password.
- Access to an SMS capable phone or the manufacturer configuration tool to send SMS setup commands if using SMS provisioning.
- Device powered on with adequate battery or powered via installation wiring during provisioning.
- Knowledge of the device default password if required by commands or provisioning. The public sample uses 0000 as the default password.
- Network coverage at the device location to allow GPRS or LTE attachment.

## How This Tracker Connects to Plaspy

The WarriorX 300 is configured to forward GNSS fixes and device telemetry to the shared Plaspy server endpoint and port so that Plaspy can ingest location, event and condition data for monitoring and alerts. When properly configured, the tracker establishes a GPRS or LTE session and opens a connection to the Plaspy server using the selected transport.

- The device sends periodic GNSS position updates to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on installer preference and firmware support.
- Plaspy receives telemetry such as location, movement alerts, battery status and supported sensor data.
- The platform automatically detects the protocol and interprets the tracker messages for visibility and eventing.
- After configuration, validate that the device is reporting to Plaspy and that reported data matches expectations.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the WarriorX 300, such as SMS provisioning or the vendor tool documented by TopFly.
2. Set the APN for the installed SIM using the APN, username and password values from your mobile operator.
3. Enter the Plaspy server address using either d.plaspy.com or the server IP 54.85.159.138 per the device options.
4. Set the server port to 8888 for the device. All devices in Plaspy use this same port.
5. Choose UDP or TCP if the device requires a transport selection and the installer needs to match network or reliability preferences.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply changes.
7. Validate that the tracker reports to Plaspy by confirming it appears on the platform and that location and telemetry are delivered.

## Example Configuration Commands

The WarriorX 300 documentation provides SMS commands that can be sent to the device for basic provisioning. The sample configuration uses the default device password 0000. Preserve placeholders exactly when replacing with your operator values.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN with placeholders for APN, APN username, and APN password. Replace {{apn}} {{apnu}} and {{apnp}} with your carrier values. If username or password are not required, leave those placeholders empty as the device documentation indicates.
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy by IP and port. This points the tracker to Plaspy server IP and port 8888.
```text
IP,0000,54.85.159.138 8888#
```

- Set the reporting interval to 60 seconds using the device timer format shown in the vendor example. Adjust values as needed for your use case and battery plan.
```text
TIMER,0000,60:60:0:0#
```

Notes on these commands
- The numeric password 0000 shown in the examples is the published default password in the provided model configuration content.
- The placeholders {{apn}} {{apnu}} and {{apnp}} represent the operator APN, APN username, and APN password respectively. Replace them with your operator values when sending the APN command.
- Send SMS commands from an authorized phone number or using the manufacturer tool according to TopFly instructions.

## Configuration Notes

- Manufacturer firmware variations can change SMS command syntax or available features. Always check the device firmware revision against the vendor documentation.
- The WarriorX 300 supports SMS based provisioning in the public example, but vendor tools or USB Type C configuration may also be available for bulk or local setup.
- Choose UDP or TCP transport based on network reliability and device firmware support. Plaspy supports both and detects the connected protocol automatically.
- Plaspy uses the same port 8888 for all devices; configure this port exactly as shown to ensure correct routing to the platform.
- Confirm APN credentials and SIM service are active before troubleshooting connectivity to Plaspy.

## Why Use Plaspy with This Configuration

Using the TopFly WarriorX 300 with Plaspy gives organizations long term, low maintenance asset visibility with configurable reporting to balance battery life and update frequency. The public SMS provisioning example lets field technicians quickly point devices at Plaspy and validate reporting without complex setup, while Plaspy ingests location, alerts and supported sensor telemetry for operational monitoring.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, setup methods, and firmware behavior can change over time so verify device specific configuration details and the latest command syntax on the TopFly website at https://www.topflytech.com/.
