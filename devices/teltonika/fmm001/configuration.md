---
slug: /teltonika/fmm001/configuration
id: fmm001-configuration
sidebar_label: Configuration
title: Teltonika - FMM001 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Teltonika FMM001 for use with Plaspy including server settings and example SMS commands
keywords:
  - Teltonika FMM001 configuration
  - FMM001 Plaspy setup
  - Teltonika tracker setup
  - FMM001 server configuration
  - Teltonika OBD tracker
  - FMM001 SMS commands
  - Plaspy device configuration
  - vehicle tracking FMM001
  - GNSS tracker setup
  - fleet management tracker
---

# Teltonika - FMM001 Configuration

This page covers the public configuration context for using the Teltonika FMM001 tracker with Plaspy. It explains the shared server settings Plaspy requires, shows how those settings are commonly applied on the device, and includes an example SMS configuration command exposed in public Teltonika configuration guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools such as Teltonika Configurator, FOTA, or SMS commands. Use this guide for practical, public setup information and verify device specific details with the official Teltonika documentation.

## Configuration Overview

This configuration prepares the FMM001 to report location and device data to Plaspy by setting the device APN and pointing the tracker to Plaspy server endpoints and port 8888. The example command included below shows how basic parameters can be applied with a single instruction that includes APN placeholders and the Plaspy server address.

- Provide APN credentials so the tracker has network connectivity for GPRS or LTE CAT M1
- Set the Plaspy server domain or IP so the tracker sends telemetry to Plaspy
- Configure port 8888 and select the transport method if required by the device
- Validate that the device is actively reporting to the Plaspy service and visible in your Plaspy account
- Use manufacturer tools or SMS commands to apply and verify the settings

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

## Typical Requirements Before Setup

- A powered and reachable Teltonika FMM001 device that supports SMS and GPRS or LTE data
- An active SIM card with data and SMS enabled and an APN ready for use
- Access to Teltonika configuration methods such as Teltonika Configurator, FOTA tools, FMBT app, or SMS command capability
- Credentials and access to your Plaspy account to confirm device visibility after configuration
- Basic knowledge of the device IMEI or identifier so you can match the physical device to the Plaspy platform
- A note that firmware version and tool availability may affect specific steps

## How This Tracker Connects to Plaspy

When configured, the FMM001 reports location, events, and device status to the shared Plaspy server endpoint and port. Plaspy receives these messages and uses automatic protocol detection to interpret the tracker protocol and display the device data within the platform.

- The tracker sends telemetry to d.plaspy.com or directly to 54.85.159.138
- All messages are sent to port 8888 which Plaspy listens on for devices
- The device can be configured to use UDP or TCP transport on the same port as required
- Plaspy detects the tracker protocol automatically and interprets incoming data
- Once reporting, the device becomes visible in Plaspy for monitoring and event reporting

## Common Configuration Workflow

1. Access the official Teltonika configuration method you prefer such as Teltonika Configurator, FOTA Web, FMBT app, or SMS commands.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server host field.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires an explicit selection.
5. Provide APN settings for the SIM using the APN, APN user, and APN password fields as needed.
6. Apply or save the configuration to the device and restart it if the tool indicates a restart is required.
7. Validate that the device is reporting to Plaspy by checking device activity in your Plaspy account and verifying recent location or event messages.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, enter the following SMS or terminal command using the manufacturer supported format. This public command sets APN values and points the device to Plaspy.

- Explanation of placeholders
  - [apn] = your SIM data APN
  - [apnu] = APN username if required by your operator
  - [apnp] = APN password if required by your operator

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Notes about the example command
  - The command above was provided as public Teltonika guidance for setting basic connectivity and server parameters.
  - Replace the APN placeholders with the values supplied by your mobile operator.
  - The server host is d.plaspy.com and the server port is 8888 as required by Plaspy.
  - Send this command via the Teltonika supported method for your device such as SMS or a configuration utility.

## Configuration Notes

- Teltonika offers multiple configuration channels including Configurator tools, FOTA, and SMS commands; choose the method that matches your deployment and firmware.
- Firmware versions and device revisions can change parameter IDs or available commands; always confirm parameter names and IDs in the Teltonika documentation for your firmware.
- When given the option, UDP can be simpler for low latency telemetry while TCP provides session reliability; select the transport that fits your network and monitoring requirements.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you only need to point the device to the shared server endpoint.
- If you use SMS commands for configuration, confirm SMS access and command formats on the device before sending bulk updates.

## Why Use Plaspy with This Configuration

Using Plaspy with the Teltonika FMM001 helps organizations consolidate vehicle visibility, event reporting, and device monitoring under a single server configuration. By pointing the FMM001 to Plaspy's shared endpoint and using the same port across devices, deployments are easier to standardize and maintain.

To learn more about Plaspy and how it manages device connectivity and telemetry, visit https://www.plaspy.com. For the latest device specific configuration details, firmware behavior, and official command references for the Teltonika FMM001, verify current information on the manufacturer website https://www.teltonika-gps.com/
