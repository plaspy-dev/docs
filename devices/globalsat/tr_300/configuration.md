---
slug: /globalsat/tr_300/configuration
id: tr_300-configuration
sidebar_label: Configuration
title: GlobalSat - TR-300 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the GlobalSat TR-300 to report to Plaspy with server settings SMS commands and example steps for setup and verification
keywords:
  - GlobalSat TR-300 configuration
  - GlobalSat TR-300 setup
  - TR-300 Plaspy
  - Plaspy configuration guide
  - GPS tracker setup
  - TR-300 SMS configuration
  - tracker server configuration
  - GPS platform setup
  - personal tracker configuration
  - tracking software setup
---

# GlobalSat - TR-300 Configuration

This page documents the public configuration context for using the GlobalSat TR-300 with Plaspy. It summarizes the practical steps and publicly available SMS command examples needed to point the device at Plaspy, explains what to prepare before setup, and shows how Plaspy receives data from the tracker. Use this guidance together with the TR-300 manufacturer materials for device specific details.

Plaspy uses a shared server endpoint and the same port for all devices supported on the platform and it automatically detects the tracker protocol. Manufacturer side setup steps for the TR-300 can vary depending on firmware, hardware revision, installation type, and vendor tools. The TR-300 supports GPRS and SMS configuration methods, and the public SMS command format and example commands included here show one practical way to set the device to report to Plaspy.

## Configuration Overview

This configuration process prepares the TR-300 to send location and status data to the Plaspy platform so the device becomes visible and manageable within Plaspy. The public SMS command examples below show how to set the server endpoint and port and optionally reboot the device to apply changes.

- Point the TR-300 to the Plaspy server endpoint so reports are routed to your Plaspy account.
- Configure the device APN settings and network parameters so it can use cellular data.
- Set the server IP or domain and port to the Plaspy values and ensure transport selection matches the device capability.
- Validate connectivity by confirming the device appears in Plaspy and is reporting as expected.
- Reboot the device after configuration if required to activate the new settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device where transport selection is required
- Plaspy automatically detects the tracker protocol when the device connects to the server

## Typical Requirements Before Setup

- A charged TR-300 with an active SIM card provisioned for data and SMS as required
- The device IMEI number available for use in SMS or configuration tools
- Access to the TR-300 manufacturer configuration method such as SMS commands or the vendor tool
- Basic APN information for the cellular operator including APN name and any username or password required
- A way to send SMS commands to the device from a phone or SMS gateway if using the SMS method
- Access to Plaspy account credentials to verify that the device reports into the platform after setup

## How This Tracker Connects to Plaspy

The TR-300 is configured to report its telemetry and event data to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform. Plaspy accepts connections over the configured transport and maps incoming messages to the correct device by IMEI or identifier.

- The device is pointed to d.plaspy.com or the Plaspy server IP 54.85.159.138 to route data to Plaspy
- All devices on Plaspy use port 8888 so the TR-300 must be set to use that port
- The tracker can be configured to use UDP or TCP transport depending on device options
- Plaspy automatically detects the tracker protocol after the device connects to the shared endpoint
- Once online, the tracker transmits periodic updates and event reports so Plaspy can show location and status

## Common Configuration Workflow

1. Access the official GlobalSat TR-300 configuration method recommended by the manufacturer such as SMS commands or vendor software.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server configuration field.
3. Set the device port to 8888 which is the port used by Plaspy for all supported devices.
4. Choose UDP or TCP transport on the device if it requests a transport selection.
5. Configure APN parameters (APN, username, password) so the device can connect to the cellular network.
6. Apply or save the configuration and optionally send the device reboot command to activate new settings.
7. Validate that the device reports to Plaspy by checking device visibility and last reported time in your Plaspy account.

## Example Configuration Commands

The TR-300 can be configured by sending SMS commands. The following public command examples are provided for practical configuration. Preserve the placeholders where indicated and replace them with your actual values. The checksum placeholder must be calculated per the device checksum method before sending.

Note: the TR-300 public examples use a message format that may be wrapped or prefixed by platform specific strings. Example format referenced in the public content was:
TSPRXAB27GHKLMnaicz*U!

1) Setup command to configure APN and Plaspy server (replace placeholders and append correct checksum):

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- [imei] — replace with the device IMEI number.
- [apn] — replace with the cellular APN name for the SIM operator.
- [apnu] — replace with the APN username if required by the operator or leave empty if not used.
- [apnp] — replace with the APN password if required or leave empty if not used.
- [checksum] — two digit uppercase hexadecimal XOR checksum of the command string prior to the asterisk. The manufacturer public example computes the checksum by XORing each character code in the command portion and converting the result to two digit uppercase hex.

2) Optional reboot command to apply settings:

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

- [checksumreeboot] — calculated checksum for the reboot command string before the asterisk.
- This reboot command is typically optional but recommended after applying configuration to ensure settings take effect.

If you prefer, you can use the server domain d.plaspy.com instead of the numeric IP where the device supports domain names, but the public examples above use the IP 54.85.159.138 and specify port 8888.

## Configuration Notes

- The TR-300 public SMS configuration method is commonly used, but manufacturer tools or firmware updates may provide alternative configuration workflows.
- The checksum in the example commands is required by the device message format; the manufacturer script computes it by XORing character codes and converting to two digit uppercase hex.
- Choose UDP or TCP according to device capability and network reliability; Plaspy supports both transports and will detect the protocol automatically.
- Firmware versions and regional device variants can change exact command syntax or available parameters; always confirm against the official GlobalSat documentation.
- If using the domain d.plaspy.com, DNS resolution must be available on the device network; using the IP 54.85.159.138 is an alternative where supported.

## Why Use Plaspy with This Configuration

Using Plaspy with the GlobalSat TR-300 gives organizations and caregivers a straightforward way to consolidate device location and status into a single platform for monitoring, alerts, and operational visibility. Pointing the TR-300 at the shared Plaspy endpoint and port makes device onboarding consistent across multiple units and reduces per-device server configuration overhead.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details, command syntax, and firmware behavior with the GlobalSat manufacturer documentation https://www.globalsat.com.tw/ since manufacturer setup methods and firmware behavior can change over time.
