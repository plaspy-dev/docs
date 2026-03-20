---
slug: /teltonika/fmb900/configuration
id: fmb900-configuration
sidebar_label: Configuration
title: Teltonika - FMB900 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring Teltonika FMB900 for use with Plaspy real time tracking server
keywords:
  - Teltonika FMB900 configuration
  - Teltonika FMB900 setup
  - FMB900 Plaspy configuration
  - FMB900 server setup
  - Teltonika GPS tracker configuration
  - Plaspy device setup
  - vehicle tracker configuration guide
  - FMB900 tracking platform setup
  - Teltonika Configurator guide
  - FMB900 APN server settings
---

# Teltonika - FMB900 Configuration

This page covers the public configuration context for using the Teltonika FMB900 tracker with Plaspy. It focuses on the shared server settings and practical steps you can apply to prepare the FMB900 for real time reporting into the Plaspy platform while drawing on the available public configuration command example included below.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tooling such as Teltonika Configurator or SMS based configuration, so treat the instructions here as practical public guidance and verify device specific actions against the manufacturer documentation.

## Configuration Overview

This configuration process prepares the FMB900 to send location and basic telemetry to Plaspy by applying server and network parameters and validating connectivity. The goal is to point the device to Plaspy, ensure the SIM and APN are correct, and confirm the tracker appears in the Plaspy platform.

- Configure APN and network credentials required for the device SIM to access mobile data.
- Set the device server endpoint to Plaspy so the tracker reports telemetry to the platform.
- Choose transport and port settings supported by both the device and Plaspy.
- Apply and save configuration using Teltonika Configurator or supported SMS commands.
- Validate connectivity and confirm the device appears in Plaspy for live tracking.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on device configuration options  
- Plaspy automatically detects the tracker protocol so the platform can accept common Teltonika formats

## Typical Requirements Before Setup

- A powered and installed FMB900 device with an active SIM card provisioned for data.
- APN, APN username, and APN password values from the SIM operator to populate the device network settings.
- Access to Teltonika configuration tools such as Teltonika Configurator or the device SMS configuration method.
- Knowledge of the device firmware version and any vendor specific setup notes that may affect parameters.
- Ability to restart the device after applying settings and access to the vehicle or installer for validation.

## How This Tracker Connects to Plaspy

The FMB900 is configured to report its tracking and telemetry events to the shared Plaspy server endpoint and port. Once configured with the correct APN and server details, the device will send position updates and basic telemetry to the Plaspy endpoint for visibility in the platform.

- The device sends location and telemetry packets to d.plaspy.com on port 8888.  
- Plaspy accepts connections over UDP or TCP and automatically detects the tracker protocol used by the device.  
- Regular position updates appear in Plaspy for live tracking and historical playback.  
- Event and status reports from the tracker are forwarded into the account for monitoring and alerts.  
- Validation in Plaspy confirms that the tracker is communicating with the shared server endpoint.

## Common Configuration Workflow

1. Access the official Teltonika configuration method such as Teltonika Configurator or the device SMS configuration channel.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.  
3. Set the device port to 8888 as the destination port for reporting.  
4. Choose UDP or TCP transport if the device requires explicit transport selection.  
5. Populate APN credentials using your SIM operator values for APN, APN username, and APN password.  
6. Apply or save the configuration and restart the device if the device or installer guidance requires a reboot.  
7. Validate that the device reports to Plaspy by checking device status and recent messages in the Plaspy platform.

## Example Configuration Commands

The public model configuration example provided for Teltonika devices can be used to set APN, server domain, and port in a single command. Preserve placeholders when you replace them with your operator values.

- Example combined parameter command (preserve placeholders):

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

What the placeholders mean:
- [apn] — Replace with your cellular operator APN name.  
- [apnu] — Replace with your APN username if required by the operator. Leave empty if not used.  
- [apnp] — Replace with your APN password if required by the operator. Leave empty if not used.

Notes on the command:
- This public example sets APN credentials and points the device to d.plaspy.com on port 8888.  
- The last numeric parameter in the example is a device specific flag included in the public command sequence; consult Teltonika documentation or Configurator to understand the exact meaning for your firmware.  
- The command may be applied via SMS or through Teltonika Configurator depending on the deployment and device firmware.

## Configuration Notes

- Firmware and configurator versions can change the parameter numbers or expected command format; always verify against current Teltonika documentation.  
- Choose UDP or TCP based on your network and operational needs; both transports are supported by Plaspy and the device may require an explicit selection.  
- SMS based configuration is commonly supported for Teltonika devices but using Teltonika Configurator or FOTA WEB is recommended for bulk or repeated deployments.  
- Confirm APN credentials with the SIM operator before applying settings to avoid connectivity issues.  
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so consistent port configuration simplifies deployments.

## Why Use Plaspy with This Configuration

Using the FMB900 with Plaspy gives organizations a straightforward path to real time vehicle visibility and basic telemetry reporting. The small form factor of the FMB900 and its BLE sensor support make it a practical choice where discreet installation and low cost are important, while Plaspy provides a unified endpoint and protocol detection to simplify fleet onboarding.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and parameter definitions verify details on the manufacturer site https://www.teltonika-gps.com/ as device specifications and setup procedures can change over time.
