---
slug: /topshine/mt01/configuration
id: mt01-configuration
sidebar_label: Configuration
title: TopShine - MT01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT01 GPS tracker showing Plaspy server settings SMS commands and setup workflow
keywords:
  - TopShine MT01 configuration
  - TopShine MT01 setup
  - MT01 Plaspy configuration
  - MT01 server configuration
  - TopShine GPS tracker configuration
  - MT01 GPS platform setup
  - Plaspy tracker setup
  - GPS tracker SMS configuration
  - vehicle tracking MT01
  - fleet tracking TopShine
---

# TopShine - MT01 Configuration

This page documents the public configuration context for using the TopShine MT01 tracker with Plaspy. It collects the practical, publicly available setup steps and SMS commands commonly used to point an MT01 device at Plaspy so the device can report location and event data to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer side steps can vary with firmware version, hardware revision, installation type, and vendor tools. The MT01 supports SMS and GPRS configuration methods, and the example SMS commands below use the device default password 000000 as provided in public device guidance.

## Configuration Overview

The goal of this configuration process is to prepare the MT01 for reliable communication with Plaspy so the device appears in the platform, reports telemetry, and sends event notifications.

- Configure the device APN and GPRS settings so it can use cellular data to reach Plaspy
- Set the device server endpoint and port to the shared Plaspy values
- Choose transport (UDP or TCP) if the tracker requires a transport selection
- Validate device identity and connectivity so Plaspy can associate reports with the correct vehicle
- Confirm reporting interval and mode so the tracker sends the expected updates to the platform

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the MT01 for GPRS reporting:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure UDP or TCP on the tracker if required
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered MT01 device installed or accessible for testing
- An active SIM card with data enabled and the correct APN for the mobile operator
- A method to send SMS commands to the tracker or access to the vendor configuration tool
- Knowledge of the device IMEI and access to the default device password if required
- A Plaspy account or integrator contact to verify the device appears in the platform after setup

## How This Tracker Connects to Plaspy

When configured for GPRS, the MT01 sends position and event reports to the shared Plaspy server endpoint and port. Plaspy ingests those reports, maps them to the device identifier, and presents live positions, alerts, and history in the platform.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on tracker settings and installer preference
- Plaspy automatically detects the tracker protocol so the platform can parse incoming messages
- Reports from the MT01 allow Plaspy to provide live tracking, geofence and event alerts, and historical traces
- Validation in Plaspy confirms the device is communicating and using the expected reporting interval

## Common Configuration Workflow

1. Access the official TopShine MT01 configuration method such as SMS commands or the vendor tool supplied with the device
2. Configure operator APN values so the tracker can reach the internet
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server host
4. Set port 8888 and choose UDP or TCP if the device requires a transport selection
5. Apply or save the configuration on the device and send commands as SMS when using SMS setup
6. Restart the device if the manufacturer recommends a reboot after changes
7. Validate that the device reports to Plaspy and appears in the platform with the expected update interval

## Example Configuration Commands

The MT01 can be configured by sending SMS commands to the device. The public examples below preserve the ordering and placeholders shown in the manufacturer guidance. The sample commands use the default device password 000000 which appears in the public setup examples.

Notes on placeholders
- [apn] is the mobile operator APN string
- [apnu] and [apnp] are optional APN username and password values when required by the operator
- \<device_id> below represents the 14 digit device ID derived from the IMEI as shown in the public commands; Plaspy uses the full 15 digit IMEI for platform identification

1. Optional initial factory reset command (label this as an initial or optional step)
```
W000000,990,099###
```

2. Set the device Id. Use the first 14 digits derived from the device IMEI for the device ID field
```
W000000,010,<14-digit-device-id>
```
- Example approach: extract the first 14 digits from the IMEI and send in place of \<14-digit-device-id>
- Public note from device guidance: the device uses a 14 digit ID, while Plaspy identifies devices by the full 15 digit IMEI

3. Set the APN for the mobile operator. Use the APN placeholder or include optional username and password
```
W000000,011,[apn]
```
or, when APN username and password are needed:
```
W000000,011,[apn],[apnu],[apnp]
```

4. Set the GPRS server to Plaspy using the public IP and port
```
W000000,012,54.85.159.138,8888
```
- Alternatively, depending on vendor tools you may be able to use the domain d.plaspy.com instead of the IP

5. Switch the device to GPRS mode
```
W000000,013,2
```

6. Set the update interval (example uses code 6 as in the public command list)
```
W000000,014,6
```
- Adjust the numeric value according to the vendor documentation for desired reporting frequency

7. Verification command to request IMEI from the device
```
W000000,601
```
- Use this command to confirm the device IMEI when troubleshooting identity or device id mapping

Important: the commands shown use the default password 000000 in the public examples. If your device password has been changed, include the correct password in each SMS command as required by the manufacturer format.

## Configuration Notes

- SMS based setup is supported and commonly used for the MT01 but vendor tools or a configuration interface may also be available depending on the package and firmware
- Firmware versions and hardware revisions can change command formats or required parameters; always confirm command syntax with current manufacturer documentation
- Choose UDP or TCP based on installer preference and network environment; Plaspy will accept either transport and will detect the protocol automatically
- Use the APN placeholders [apn], [apnu], [apnp] exactly as needed for your mobile operator; leaving username and password blank is valid when not required
- Restart the device after applying GPRS/server changes if recommended by the manufacturer to ensure settings take effect

## Why Use Plaspy with This Configuration

Using the TopShine MT01 configured to report to Plaspy gives fleet managers and operators centralized visibility into vehicle positions, events, and telemetry. The shared Plaspy server endpoint and automatic protocol detection simplify device onboarding because the same port and server settings are used across supported devices, reducing per-device configuration differences.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest manufacturer specific commands, firmware notes, and MT01 product details verify the current documentation at the TopShine website https://www.gztopshine.com/ to ensure accuracy for your firmware and hardware revision.
