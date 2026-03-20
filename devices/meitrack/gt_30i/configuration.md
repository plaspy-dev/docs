---
slug: /meitrack/gt_30i/configuration
id: gt_30i-configuration
sidebar_label: Configuration
title: Meitrack - GT-30i Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Meitrack GT 30i showing Plaspy server configuration and SMS GPRS commands
keywords:
  - Meitrack GT 30i configuration
  - Meitrack GT 30i setup
  - GT 30i Plaspy
  - GPS tracker configuration
  - personal tracker setup
  - GPRS server setup
  - SMS configuration GT 30i
  - two way voice tracker
  - Plaspy server setup
  - GT 30i tracking software configuration
---

# Meitrack - GT-30i Configuration

This page describes the public configuration context for using the Meitrack GT-30i with Plaspy. It gathers the practical server settings and the commonly used manufacturer commands so you can prepare the device to report location and events to the Plaspy platform. The GT-30i supports SMS and GPRS TCP UDP communication, two way voice calls, SOS alerts, and has internal memory to store coordinates when GPRS is unavailable, which makes it suitable for personal tracking scenarios.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side steps can vary by firmware version, hardware revision, installation type, or vendor tools. The GT-30i supports SMS based configuration in the public commands below; you should validate firmware specifics and APN values with your SIM provider and Meitrack documentation before applying settings.

## Configuration Overview

Preparing the GT-30i for use with Plaspy focuses on configuring the device to send GPRS reports to Plaspy and verifying that those reports are received. The goal is to ensure reliable communications so the device appears and stays visible inside Plaspy for live tracking and event monitoring.

- Configure GPRS server settings so the tracker reports to Plaspy server endpoint
- Set reporting interval and event reporting to match your monitoring needs
- Verify APN and SIM connectivity so GPRS sessions can be established
- Use the GT-30i SMS commands or manufacturer tools to apply settings and optionally reset to factory defaults
- Validate device telemetry in Plaspy to confirm visibility and correct protocol handling

## Plaspy Server Settings

- Server domain d.plaspy.com for use when the device accepts domain names
- Server IP 54.85.159.138 for direct IP configuration when preferred
- Port 8888 which is the same port used for all devices in Plaspy
- Transport support for UDP or TCP depending on device requirements and preferences
- Plaspy automatically detects the tracker protocol so you do not need to preselect a protocol inside the platform

## Typical Requirements Before Setup

- A charged GT-30i with power applied and accessible for SMS or configuration
- An active SIM card with a data plan and the correct APN for the mobile network
- Ability to send SMS to the device or use the official Meitrack configuration tool for your model
- Knowledge of the device password (default shown in examples below as 0000) and any password changes applied by your vendor
- Confirmed connectivity to d.plaspy.com or 54.85.159.138 from the device network
- A Plaspy account and access to the platform to validate that the device appears and reports correctly

## How This Tracker Connects to Plaspy

The GT-30i is configured to send position and event data over GPRS to the shared Plaspy server endpoint and port. Plaspy receives the incoming TCP or UDP packets, automatically detects the device protocol, and maps the device identifier so reporting becomes visible in the platform.

- GPS coordinates and event messages are sent by the tracker to d.plaspy.com or 54.85.159.138 on port 8888
- The device can use TCP or UDP transport depending on configuration; choose the transport your installation requires
- Plaspy detects the tracker protocol automatically and associates incoming data with the configured device
- Events such as SOS, movement alarms, low battery, and geofence alerts are forwarded to Plaspy for monitoring
- When GPRS is unavailable the GT-30i stores coordinates in internal memory for later upload when connectivity resumes

## Common Configuration Workflow

1. Access the official Meitrack configuration method for the GT-30i (SMS commands or vendor software) as recommended by the device documentation
2. Enter the server address using either d.plaspy.com or the server IP 54.85.159.138 in the device server field or SMS command
3. Set the server port to 8888 which Plaspy uses for all supported devices
4. Choose UDP or TCP on the device if the tracker requires transport selection for GPRS reporting
5. Enter the correct APN and any username or password required by the SIM operator if the device requires it
6. Apply or save the configuration and restart the device if required by the tracker firmware or vendor instructions
7. Validate that the device reports to Plaspy by checking the device list and live data on the Plaspy platform

## Example Configuration Commands

The GT-30i can be configured by sending SMS commands. The sample commands below use the device default password 0000 as shown in the public configuration content. Send these as SMS messages to the tracker phone number in the same order if you want to follow the example setup.

1. Optional initial factory reset (use only if you need to restore defaults)
```
0000,F11
```

2. Set the GPRS server and APN. This example uses the Plaspy server IP. You may replace the IP with d.plaspy.com if the device accepts domain names.
```
0000,A21,2,54.85.159.138,8888,{{apn}}
```
If your SIM requires APN username and password include them as additional comma separated fields:
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the mobile network APN
- {{apnu}} is the APN username when required by the operator
- {{apnp}} is the APN password when required by the operator

3. Set the time zone to UTC 0
```
0000,B36,0
```

4. Set the position update interval to 1 minute (example)
```
0000,A12,6,0
```
- This command configures periodic reporting. Adjust parameters according to your firmware and requirements.

5. Configure event reporting (example to enable basic events)
```
0000,C03,0
```

Note: Keep the password field (0000 in examples) if your device password is unchanged. If the device password has been modified, replace 0000 with the current device password before sending commands.

## Configuration Notes

- SMS based configuration is supported and shown above; manufacturer tools or USB configuration software may provide a GUI alternative depending on firmware
- Firmware versions and hardware revisions may require slightly different SMS command formats or parameter orders; always confirm against the official Meitrack documentation for your firmware
- Choose TCP or UDP transport based on network reliability and your monitoring preferences; Plaspy accepts both and will auto detect the protocol used
- Ensure the correct APN settings from your mobile operator are used; missing or incorrect APN will prevent GPRS connections
- All devices in Plaspy use the same port 8888 so you do not need different ports per device

## Why Use Plaspy with This Configuration

Using the GT-30i with Plaspy centralizes location and event monitoring so organizations and guardians gain consistent visibility into device activity. The GT-30i's support for GPRS and SMS, combined with Plaspy's automatic protocol detection and unified server settings, simplifies onboarding multiple personal trackers and helps maintain reliable reporting for live tracking and incident alerts.

To learn more about Plaspy and its device compatibility visit https://www.plaspy.com. For the latest GT-30i firmware details, full command reference, and manufacturer guidance verify the device specific information at the official Meitrack site https://www.meitrack.com/ as manufacturer specifications and setup methods can change over time.
