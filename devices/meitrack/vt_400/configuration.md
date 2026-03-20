---
slug: /meitrack/vt_400/configuration
id: vt_400-configuration
sidebar_label: Configuration
title: Meitrack - VT-400 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Meitrack VT 400 to connect with Plaspy using shared server settings and SMS or GPRS configuration
keywords:
  - Meitrack VT 400 configuration
  - Meitrack VT 400 setup
  - VT 400 server configuration
  - VT 400 Plaspy setup
  - Meitrack GPS tracker configuration
  - VT 400 SMS commands
  - VT 400 GPRS setup
  - Meitrack tracker Plaspy
  - vehicle tracking VT 400
  - fleet tracking Meitrack VT 400
---

# Meitrack - VT-400 Configuration

This page covers the public configuration context for using the Meitrack VT-400 with Plaspy. It explains the shared server settings Plaspy expects, the practical steps commonly used to point a VT-400 at the Plaspy endpoint, and the example SMS configuration commands that are publicly documented for the device. Use this guide to prepare the tracker for communication with Plaspy and to understand what to validate during setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, or vendor configuration tools. The VT-400 supports SMS and GPRS TCP or UDP communication and the manufacturer provides SMS command formats that can be used to configure the device for reporting to Plaspy.

## Configuration Overview

The goal of configuration is to prepare the VT-400 so it reliably reports position and event data to Plaspy. This includes setting the GPRS server details, selecting transport mode if required, and enabling periodic reporting so the device becomes visible in the platform.

- Set the device GPRS server to Plaspy so location data is forwarded to the platform
- Configure reporting interval and basic event settings to control data frequency
- Use SMS commands or manufacturer tools to apply settings when local access is required
- Validate connectivity so the device appears in Plaspy and starts sending telemetry
- Keep manufacturer documentation on hand for firmware specific command nuances

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port 8888 for all supported devices, and the platform automatically detects the tracker protocol so trackers can report over UDP or TCP to the same endpoint.

## Typical Requirements Before Setup

- A powered and operational VT-400 with a charged backup battery if installed
- An active SIM with data or SMS capability according to the VT-400 requirements
- Access to the VT-400 configuration method documented by the manufacturer such as SMS commands or vendor software
- Knowledge of the device password if it was changed from the factory default
- A plan for applying and testing settings in a safe environment before large scale deployment

## How This Tracker Connects to Plaspy

The VT-400 is configured to report its telemetry to the shared Plaspy server endpoint and port. Once configured, the device will send location and event messages to Plaspy where they can be visualized and processed.

- The tracker sends GPRS TCP or UDP packets to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy automatically detects the tracker protocol and processes incoming data
- Reporting frequency is controlled by the device update interval so visibility in Plaspy reflects the chosen cadence
- Event reporting and alarms are forwarded to Plaspy once the GPRS server is pointed to the platform
- Platform visibility requires successful network registration and correct APN parameters for the SIM used

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the VT-400. The manufacturer documents SMS command flows and vendor tools for configuration.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server configuration.
3. Set the port to 8888 which is the shared Plaspy port used for all devices.
4. Choose UDP or TCP if the device requires a transport selection; Plaspy will accept either and detect the protocol automatically.
5. Apply or save the configuration using the device method you used such as sending SMS commands or using vendor configuration software.
6. Restart or power cycle the device if the manufacturer recommends a reboot after changing network settings.
7. Validate that the device reports to Plaspy by checking platform device status and recent incoming messages.

If you plan to use SMS based setup, use the example SMS commands below as documented by Meitrack and adapt placeholders to your SIM and network settings.

## Example Configuration Commands

The VT-400 manufacturer provides SMS commands for configuration. The example commands below use the factory default device password 0000. If your device password has been changed, replace 0000 with the current device password.

Note on placeholders
- {{apn}} is the mobile network Access Point Name required for GPRS data
- {{apnu}} is the APN username when required by the SIM provider
- {{apnp}} is the APN password when required by the SIM provider

1. Optional initial factory settings reset
```
0000,F11
```
Label: Optional initial factory settings reset. Use this command only when you intend to restore factory defaults or as part of an initial setup if required.

2. Set the GPRS server to Plaspy using IP and port and include APN placeholders
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explanation: Configure the GPRS server mode 2 with the Plaspy server IP 54.85.159.138 and port 8888. Replace {{apn}}, {{apnu}}, and {{apnp}} with your SIM operator values. If your workflow prefers the domain, the equivalent server domain is d.plaspy.com.

3. Set the time zone to UTC 0
```
0000,B36,0
```
Explanation: Set device time zone to UTC 0. Adjust if you need a different offset.

4. Set the reporting interval to 1 minute
```
0000,A12,6,0
```
Explanation: Configure the update interval. This example sets periodic reporting every 1 minute. Modify according to your reporting needs and data plan.

5. Set event configuration
```
0000,C03,0
```
Explanation: Configure event reporting flags as required. This example is a baseline events configuration.

Send these commands as SMS messages to the VT-400 following the manufacturer instructions for sending commands. Maintain the correct device password at the start of each command string.

## Configuration Notes

- Firmware and hardware revisions can change command formats and available parameters. Always confirm the exact syntax with the manufacturer documentation for your firmware.
- The VT-400 supports SMS based configuration as shown above and GPRS TCP or UDP reporting to Plaspy. Use the transport option that best suits your network and operational needs.
- Plaspy uses the same port 8888 for all devices and automatically detects tracker protocol so you can point the device to the shared server without needing protocol specific ports.
- When using APN credentials, preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} until replaced with your operator details.
- Test configuration on a single device before mass provisioning to verify APN, transport, and reporting interval behavior.

## Why Use Plaspy with This Configuration

Using Plaspy with a correctly configured VT-400 provides a centralized place to monitor fleet or machinery location and events. Pointing the device to the Plaspy server endpoint ensures location updates and alarms are delivered to the platform where they can be visualized, routed, or integrated into operational workflows.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring visit https://www.plaspy.com. For the latest VT-400 specific commands, firmware notes, and full manufacturer documentation verify current details at https://www.meitrack.com/ as device behavior and setup methods can change over time.
