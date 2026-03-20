---
slug: /queclink/gl33cg/configuration
id: gl33cg-configuration
sidebar_label: Configuration
title: QuecLink - GL33CG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL33CG showing Plaspy server settings and SMS commands for tracker setup
keywords:
  - QuecLink GL33CG configuration
  - QuecLink GL33CG setup
  - GL33CG Plaspy integration
  - QuecLink server configuration
  - GL33CG GPS tracker setup
  - cargo tracker configuration
  - GL33CG SMS commands
  - Plaspy tracker setup
  - device server settings
  - GL33CG tracking platform
---

# QuecLink - GL33CG Configuration

This page covers the public configuration context for using the QuecLink GL33CG tracker with Plaspy. It focuses on the practical, publicly available steps and settings needed to point the tracker to Plaspy so the device can report location and event data to the platform. Where available, SMS setup commands from the manufacturer are included as examples.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the guidance here as a practical starting point and verify any device specific differences with official QuecLink documentation.

## Configuration Overview

The goal of configuration is to prepare the GL33CG to communicate reliably with Plaspy so location, alerts, and basic telemetry are visible in the platform. Configuration usually involves setting APN information, defining the Plaspy server endpoint, selecting transport mode if required, and enabling desired reporting intervals or alarm inputs.

- Configure network access and APN so the GL33CG can reach the internet
- Point the device to the Plaspy server using the hostname or IP and the shared port
- Select UDP or TCP transport if the device requires a transport selection
- Set reporting intervals and enable any input or alarm notifications needed for cargo monitoring
- Validate the device is visible and reporting correctly in Plaspy after applying settings

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Charged and powered tracker and any required installation wiring in place
- Active SIM that can send and receive SMS and has data access configured for the device
- APN, APN username, and APN password details for the SIM operator ready to apply
- Access to the official QuecLink configuration method for this model such as SMS commands or vendor tools
- Knowledge of the device password or administrative credentials used for SMS configuration
- Basic access to Plaspy account or installer instructions to validate the device after setup

## How This Tracker Connects to Plaspy

The GL33CG uses its cellular link to send location and event data to the Plaspy server endpoint and port. Plaspy receives those packets on the shared port and automatically identifies the tracker protocol so no device-specific server differences are required on the Plaspy side.

- The tracker is configured to report to Plaspy using the hostname d.plaspy.com or the IP 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device selection; Plaspy accepts either and detects the protocol
- Reporting intervals determine how often the device sends position updates to Plaspy
- Alarm inputs and SOS events are sent from the device to Plaspy to enable operational monitoring
- RF433 and local LBS features are device level functions and do not replace the cellular reporting channel to Plaspy

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL33CG such as the SMS command interface or vendor configuration tool
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 as the server endpoint
3. Set the destination port to 8888 for all devices to match Plaspy server configuration
4. Choose UDP or TCP transport if the device requires a transport selection
5. Configure APN settings and any required device password or credentials, then apply or save the configuration
6. Restart or power cycle the tracker if the device requires a reboot to apply new network or server settings
7. Validate that the device reports to Plaspy and appears in the platform with expected location updates and events

## Example Configuration Commands

The GL33CG can be configured by sending SMS commands to the device. The following SMS commands are provided as a public example. The device password used in these commands is the default password queclink. Replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator APN settings where indicated.

Note that the GPRS server command below includes both the Plaspy domain d.plaspy.com and the IP 54.85.159.138 with port 8888. Plaspy accepts UDP or TCP on port 8888 and will detect the tracker protocol automatically.

- Restore factory settings (optional initial step)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN. Replace placeholders as needed:
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explanation of placeholders:
- {{apn}} is the APN string for your SIM operator
- {{apnu}} is the APN username if required by the operator
- {{apnp}} is the APN password if required by the operator

- Set the GPRS server to Plaspy using hostname and IP and port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
This command points the device to Plaspy via d.plaspy.com and the IP 54.85.159.138 on port 8888

- Set reporting interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each command as an SMS to the device from an authorized number, and confirm device responses when available. After configuration, consider changing the default password from queclink to a secure password using the vendor recommended command or tool.

## Configuration Notes

- Manufacturer firmware versions and device behavior can change how commands are accepted or processed; always check the QuecLink documentation for firmware specific details
- SMS based configuration is supported for the GL33CG as shown above but vendor tools may offer a GUI alternative depending on your installer process
- Plaspy accepts UDP or TCP on port 8888 and will detect the correct tracker protocol automatically; choose the transport that matches your fleet policy or device capability
- Replace APN placeholders with operator values and verify that the SIM has SMS and data enabled if required by the configuration steps
- If the device uses a default password such as queclink, change it after initial configuration if possible to protect against unauthorized commands

## Why Use Plaspy with This Configuration

Using the GL33CG with Plaspy provides a straightforward path to cargo visibility and event monitoring. Pointing the device to the shared Plaspy endpoint simplifies deployment because Plaspy uses a common server and port for all supported devices and handles protocol detection, reducing per-device server configuration complexity.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior at the manufacturer site https://www.queclink.com/ . Manufacturer specifications and setup steps can change over time so confirm device details on the official QuecLink pages.
