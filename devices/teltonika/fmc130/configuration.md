---
slug: /teltonika/fmc130/configuration
id: fmc130-configuration
sidebar_label: Configuration
title: Teltonika - FMC130 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Teltonika FMC130 for Plaspy with server settings example commands and practical setup steps for reliable fleet tracking
keywords:
  - Teltonika FMC130 configuration
  - FMC130 Plaspy setup
  - Teltonika FMC130 server configuration
  - FMC130 GPS tracker setup
  - Teltonika tracker configuration
  - Plaspy device setup
  - vehicle tracking FMC130
  - fleet management FMC130
  - Teltonika FMC130 APN settings
  - FMC130 SMS configuration
---

# Teltonika - FMC130 Configuration

This page documents the public configuration context for using the Teltonika FMC130 with the Plaspy platform. It collects the Plaspy server settings you will need, explains the practical setup workflow, and shows an example batch command used to push basic parameters to the tracker. Use this guidance to prepare the FMC130 for reporting to Plaspy; follow manufacturer tools and official documentation for device-specific steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps vary by firmware version, hardware revision, installation type, and the Teltonika configuration tool you use. The FMC130 is a telemetry-focused tracker with 4G LTE Cat 1 and 2G fallback, internal backup battery, impulse input for fuel meters, CAN adapter compatibility, and Bluetooth LE support — details that inform how you configure connectivity and telemetry for Plaspy.

## Configuration Overview

The goal of this configuration is to prepare the FMC130 to communicate reliably with Plaspy, ensuring location and telemetry flow into the platform for live tracking and reporting. The process focuses on setting the device APN and server endpoint, selecting transport, and validating that packets reach Plaspy.

- Configure cellular APN and credentials so the device can establish a data connection.
- Set the FMC130 to report to Plaspy using the shared server endpoint and port.
- Choose UDP or TCP transport where the device requires a selection and save the setting.
- Verify the device is visible in Plaspy and that telemetry such as impulse input and CAN data are populated.
- Use the example batch command below as a quick reference for setting APN and Plaspy server values via the manufacturer supported method.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically when the FMC130 sends data to the configured endpoint.

## Typical Requirements Before Setup

- Access to the FMC130 and the Teltonika configuration method you plan to use (SMS commands, Teltonika Configurator, or FOTA WEB where applicable).
- A powered and installed device with a working SIM card and active data service (APN and credentials available).
- Knowledge of your operator APN, username, and password to populate placeholders such as {{apn}}, {{apnu}}, and {{apnp}}.
- A way to restart or cycle power on the device if firmware or connection testing requires a reboot.
- Access to Plaspy account or onboarding instructions so you can confirm device visibility after configuration.
- Manufacturer documentation for FMC130 firmware notes and parameter reference.

## How This Tracker Connects to Plaspy

When configured, the FMC130 sends position and telemetry over the cellular data link to the shared Plaspy server endpoint and port. Plaspy receives and normalizes the incoming data so fleet managers can view live location, telemetry, and event-driven alerts.

- The tracker reports to the Plaspy server domain d.plaspy.com (or the server IP 54.85.159.138) on port 8888.
- Choose UDP or TCP on the device when required; Plaspy accepts either and will detect the protocol automatically.
- Telemetry such as impulse counts, CAN-sourced signals, and BLE sensor data are included in regular reports to Plaspy once reporting is active.
- Plaspy processes the incoming packets for live tracking, historical playback, and alert generation.
- Validation in Plaspy confirms the device is connected and sending the expected telemetry fields.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software you prefer (SMS, Teltonika Configurator, or FOTA WEB) to modify device parameters.
2. Enter your operator APN credentials where required, using placeholders like {{apn}}, {{apnu}}, and {{apnp}}.
3. Configure the server address by entering d.plaspy.com or the server IP 54.85.159.138 into the device server parameter.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and send any required batch or SMS commands to commit the changes.
6. Restart or power cycle the FMC130 if the configuration method or firmware requires a reboot to start reporting.
7. Validate that the device reports to Plaspy and appears in your Plaspy account with the expected telemetry and events.

## Example Configuration Commands

The following example is a common Teltonika batch command format used to set basic parameters including APN credentials and the Plaspy server endpoint. This example preserves placeholders for APN values; replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator values.

- Example SMS batch command to set APN and Plaspy server values

```
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders:
- {{apn}} — your cellular data APN name
- {{apnu}} — APN username if required by your operator
- {{apnp}} — APN password if required by your operator

This command sets the device APN fields and assigns the Plaspy server domain d.plaspy.com with port 8888. Parameter 2006 in the example is included by the manufacturer command template; confirm the exact meaning and transport selection in the FMC130 parameter reference in official Teltonika documentation before use.

## Configuration Notes

- Different FMC130 firmware versions and regional hardware variants may use slightly different parameter IDs or command syntax; always confirm the parameter reference for your device firmware release.
- The FMC130 supports SMS- and software-based configuration methods. Use the method that matches your installation workflow and security requirements.
- If the device asks for a transport selection, choose UDP or TCP consistent with your network and Teltonika guidelines; Plaspy accepts both on port 8888.
- Use the manufacturer tools for bulk or fleet deployments to avoid manual errors when applying server and APN settings.
- Keep a copy of applied settings and test connectivity after configuration to validate that Plaspy receives expected telemetry.

## Why Use Plaspy with This Configuration

Using the FMC130 with Plaspy gives fleet operators a reliable telemetry pipeline for real-time tracking, fuel monitoring, and remote immobiliser control. The combined capability of the FMC130's fuel impulse input, CAN integration, BLE sensor support, and internal backup battery makes it well suited for operations that require continuous visibility and comprehensive telemetry in Plaspy.

To learn more about Plaspy and see how your fleet can use this configuration, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and parameter references, verify details with the manufacturer at https://www.teltonika-gps.com/
