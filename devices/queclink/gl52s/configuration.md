---
slug: /queclink/gl52s/configuration
id: gl52s-configuration
sidebar_label: Configuration
title: QuecLink - GL52S Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guidance to configure the QuecLink GL52S tracker for use with Plaspy including server settings and example SMS commands
keywords:
  - QuecLink GL52S configuration
  - QuecLink GL52S setup
  - GL52S Plaspy configuration
  - QuecLink GL52S server settings
  - QuecLink GL52S SMS commands
  - GL52S tracker configuration
  - GL52S asset tracker setup
  - QuecLink device configuration
  - Plaspy tracker setup
  - asset tracking GL52S
---

# QuecLink - GL52S Configuration

This page documents the public configuration context for using the QuecLink GL52S with Plaspy. It focuses on the practical server settings and the SMS-based commands that are commonly used to point a device to Plaspy. Use this guide to understand what needs to be applied on the device side so the tracker can communicate with Plaspy for visibility and monitoring.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example commands below are taken from public QuecLink SMS configuration content and should be verified against your device firmware and official manufacturer documentation before use.

## Configuration Overview

The goal of configuring a GL52S for Plaspy is to prepare the tracker to report location and events to Plaspy's shared ingestion endpoint so the device is visible in the platform. Setup can be performed by SMS commands or by QuecLink configuration tools depending on the device variant and firmware.

- Set the device server endpoint to Plaspy so data is delivered to d.plaspy.com on the required port.
- Configure transport and network parameters so the device can create a connection using UDP or TCP as supported.
- Provide APN and authentication details if the device is operating in a cellular GPRS mode that requires them.
- Validate the device reports by confirming it reaches the Plaspy server and appears in the platform.
- Keep a record of default passwords and configuration steps for future maintenance and troubleshooting.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are supported on port 8888
- Plaspy automatically detects the tracker protocol when data arrives and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered GL52S device with access to receive SMS if using SMS-based configuration.
- Knowledge of the device default password (example default shown below is queclink) and ability to change it if required.
- APN credentials ({{apn}}, {{apnu}}, {{apnp}}) if the device requires GPRS settings for connectivity.
- Access to official QuecLink configuration tools or documentation for your firmware and hardware revision.
- A Plaspy account or provisioning instructions so you can confirm the device is visible after configuration.

## How This Tracker Connects to Plaspy

When configured, the GL52S sends its position and event data to Plaspy's shared server endpoint so the device can be monitored and managed from the platform. Depending on the firmware and selected transport, the tracker will initiate communication to the Plaspy endpoint and Plaspy will detect the protocol automatically.

- The device is pointed to d.plaspy.com (or 54.85.159.138) on port 8888 so telemetry reaches Plaspy.
- Transport can be set to UDP or TCP depending on the device firmware and network preferences.
- Once data arrives at Plaspy the platform maps the device protocol automatically and begins processing telemetry.
- Event reporting such as SOS or status updates is sent to Plaspy for monitoring and alerting.
- Successful connection is validated when the device appears in Plaspy and reports periodic location updates.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for your device and firmware (SMS commands, dealer tools, or firmware configuration utility).
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 when a numeric host is required.
3. Set the port to 8888 as Plaspy uses this port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection.
5. Provide APN and authentication details if configuring GPRS mode (use placeholders such as {{apn}}, {{apnu}}, {{apnp}} where required).
6. Apply or save the configuration and restart the device if the method requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking for incoming data and device status in the Plaspy platform.

## Example Configuration Commands

The following SMS commands are public examples used for QuecLink devices where SMS-based configuration is supported. These are presented in the same order as typical setup. The sample default device password shown in these examples is queclink. Adjust placeholders and parameters for your environment.

1. Restore factory settings (optional initial reset)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restores factory settings. Label as optional or initial if you need a clean baseline before configuration.

2. Set the time zone to UTC+0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configures timezone/time reporting; adjust parameters according to your required time zone.

3. Set the operator APN (replace placeholders)
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = APN name
- {{apnu}} = APN username (if required)
- {{apnp}} = APN password (if required)
- Provide the correct APN credentials supplied by your mobile operator when using GPRS.

4. Set the GPRS server to Plaspy (domain and IP provided)
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command sets the server host and port for data reporting to Plaspy. It includes both domain and numeric IP as commonly seen in public examples. Plaspy accepts d.plaspy.com and the server IP 54.85.159.138 on port 8888.

5. Set the update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configures reporting intervals. Adjust as needed for battery life and reporting frequency.

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Enables SOS notifications mapped to a specific input. Adjust input mapping per your installation.

Note: Keep the sample default password queclink secure and change it after initial configuration where possible.

## Configuration Notes

- These commands are public SMS-style configuration examples; your device firmware and model variant may accept different parameters or command formats.
- The GL52S description indicates Sigfox capability. If your specific GL52S variant uses Sigfox exclusively, follow the vendor Sigfox configuration guidance instead of GPRS SMS commands. Use the commands above only when your device firmware supports SMS/GPRS configuration.
- Choose UDP or TCP according to your network and firmware behavior. Both transports are supported by Plaspy on port 8888.
- Firmware versions, hardware revisions, and regional variants can change command syntax and available features. Always verify commands against your device's official documentation.
- SMS-based setup is commonly used for remote configuration; where possible, test commands on a single unit before mass deployment.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured GL52S can provide long-term visibility for assets, reliable event monitoring, and centralized management of devices. Plaspy's automatic protocol detection and consistent port usage simplify onboarding multiple tracker models because the same server and port values are applied across supported devices.

To learn more about Plaspy and how it can manage GL52S devices, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, please verify information on the official QuecLink website https://www.queclink.com/ as procedures and command syntax can change over time.
