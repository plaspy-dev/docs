---
slug: /tzone/tz_br04/configuration
id: tz_br04-configuration
sidebar_label: Configuration
title: TZone - TZ-BR04 Configuration
sidebar_class_name: menu_item_tracker
description: How to configure the TZone TZ-BR04 tracker to report to Plaspy using public server settings and SMS commands
keywords:
  - TZone TZ-BR04 configuration
  - TZone TZ-BR04 setup
  - TZ-BR04 Plaspy configuration
  - TZone GPS tracker configuration
  - TZ BR04 SMS commands
  - GPS tracker server configuration
  - fleet tracking setup
  - vehicle tracking configuration
  - tracker APN setup
  - TZone tracker guide
---

# TZone - TZ-BR04 Configuration

This page documents the public configuration context for using the TZone TZ-BR04 GPS tracker with Plaspy. It collects the Plaspy server settings you will need and shows the publicly available SMS commands that the TZ-BR04 accepts for GPRS setup. Use this guide to prepare the tracker for communication with the Plaspy platform and to validate basic connectivity after configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary depending on TZ firmware, hardware revision, installation type, and the vendor tools you use. The TZ-BR04 supports SMS-based configuration for GPRS parameters as shown below, and the practical steps here focus on applying Plaspy server values and verifying the device reports correctly.

## Configuration Overview

The goal of this configuration is to prepare the TZ-BR04 to send its location and status to the Plaspy platform so assets appear in the Plaspy interface. For the TZ-BR04 the public configuration flow commonly uses SMS commands to set APN, reporting interval, and the GPRS server endpoint.

- Set the mobile operator APN and optional APN credentials so the device can open a GPRS session.
- Configure the device to report at an appropriate interval for your needs, for example 60 seconds.
- Point the tracker at Plaspy by entering the Plaspy server endpoint and the shared Plaspy port.
- Enable or activate GPRS mode so the tracker can deliver data over the cellular network.
- Validate device connectivity in Plaspy and confirm location updates are arriving.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TZ-BR04. These are the values Plaspy publishes for device integration.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- A powered TZ-BR04 device installed per your site requirements and ready to accept configuration.
- A SIM card with active data service and the correct APN for the mobile operator.
- Access to the device SMS configuration method or the manufacturer configuration tool that your TZ-BR04 uses.
- The device SMS password if it was changed from the default used in example commands.
- A plan to confirm GPRS connectivity such as a second phone to receive device reply SMS messages or access to Plaspy to verify incoming packets.
- Knowledge of whether your device supports domain names or requires an IP address for the server field.

## How This Tracker Connects to Plaspy

The TZ-BR04 is configured to open a GPRS connection and send periodic reports to the Plaspy server endpoint. Once the device is pointed to the shared server and port, Plaspy automatically detects the device protocol and ingests incoming messages.

- The tracker uses configured APN settings to establish a GPRS data session.
- It reports to the Plaspy endpoint at d.plaspy.com or directly to the IP 54.85.159.138 on port 8888.
- You can choose UDP or TCP transport on the device if the firmware asks for transport selection.
- Plaspy receives the incoming data and performs automatic protocol detection to display the device in the platform.
- Regular reporting intervals deliver location and status updates according to the device configuration.

## Common Configuration Workflow

1. Access the official TZone configuration method for the TZ-BR04, typically SMS commands or the vendor configuration tool.
2. Set the mobile operator APN and optional credentials using the SMS command or tool.
3. Enter the Plaspy server address by using d.plaspy.com or the IP 54.85.159.138 as allowed by the device.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and activate GPRS mode if required.
6. Restart the device if the manufacturer procedure or firmware requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking for incoming packets or visible location updates on the Plaspy platform.

## Example Configuration Commands

The TZ-BR04 accepts SMS configuration commands for GPRS setup. The commands below are the public examples provided for SMS configuration. These use the example SMS password 000000 as shown. If your device uses a different SMS password replace 000000 with your device password.

1. Set the operator APN
- Basic form when only APN is needed:
```text
*000000,011,{{apn}}#
```
- If your APN requires username and password include those placeholders:
```text
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: {{apn}} is your operator APN. {{apnu}} and {{apnp}} are optional APN username and APN password placeholders used only if your carrier requires credentials.

2. Set the update interval to 60 seconds
```text
*000000,018,60,999#
```
Explanation: This example sets a 60 second reporting interval. Adjust the interval value as required by your use case and firmware limits.

3. Set the GPRS server to Plaspy by IP
```text
*000000,015,0,54.85.159.138,8888#
```
Explanation: This command points the tracker to the Plaspy server IP and port 8888. If your device supports domain names in the server field you can use the server domain d.plaspy.com instead of the IP when entering server settings in a configuration tool.

4. Activate GPRS mode
```text
*000000,016,1#
```
Explanation: This command enables GPRS mode so the device will attempt to use cellular data to send reports.

Preserve the numeric SMS password and placeholder order when sending commands. If your installation requires a different password replace 000000 with your configured SMS password.

## Configuration Notes

- SMS based configuration is shown above because these are the publicly available commands for the TZ-BR04; some installers use a manufacturer tool or local serial configuration instead.
- Firmware and hardware revisions may alter command formats, available parameters, or accepted transport types. Always validate commands on a test device first.
- Choose UDP or TCP according to network conditions and the device firmware options. Plaspy accepts both and will auto detect the protocol.
- Some firmware accepts domain names for server configuration, while others require an IP address. Use d.plaspy.com if supported, otherwise use 54.85.159.138.
- Keep a record of any changed SMS password and confirm reply messages from the device to ensure commands were accepted.

## Why Use Plaspy with This Configuration

Configuring the TZ-BR04 to report to Plaspy gives you a consistent server endpoint and platform behavior across many device models. Using the shared Plaspy port and automatic protocol detection simplifies device onboarding and reduces the need for custom per-device server settings, allowing teams to focus on deployment and operational monitoring rather than bespoke server configuration.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so please verify the current device instructions on the official manufacturer site http://www.tzonedigital.com/ before finalizing production deployments.
