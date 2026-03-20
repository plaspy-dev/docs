---
slug: /queclink/gv75/configuration
id: gv75-configuration
sidebar_label: Configuration
title: QuecLink - GV75 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GV75 setup with Plaspy including server settings and SMS commands
keywords:
  - QuecLink GV75 configuration
  - GV75 Plaspy setup
  - QuecLink GV75 server configuration
  - GV75 GPS tracker setup
  - QuecLink GPS platform configuration
  - GV75 tracking software configuration
  - QuecLink GV75 SMS commands
  - Plaspy tracker configuration
  - GV75 APN setup
  - Fleet tracking GV75
---

# QuecLink - GV75 Configuration

This page covers the public configuration context for using the QuecLink GV75 with the Plaspy fleet platform. It provides the core server settings and a practical SMS command example set published in public configuration resources so you can point a GV75 at Plaspy and validate connectivity for live tracking and alerts.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide as a practical reference and verify device specific steps with official QuecLink documentation when needed.

## Configuration Overview

The configuration process prepares the GV75 to send location and event data to the Plaspy platform and validates that the device appears in Plaspy for real time monitoring. Typical setup uses the GV75 SMS or manufacturer tools to apply server and APN settings and to enable reporting intervals and inputs needed for your deployment.

- Point the GV75 at the Plaspy server endpoint so GNSS fixes and events are delivered to Plaspy
- Configure the device APN and GPRS server settings so it can connect over cellular
- Set reporting interval and input behavior so the device sends the desired telemetry
- Validate device connectivity and visibility in Plaspy after applying settings
- Use the SMS commands below as a public example sequence often used for initial setup

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so devices can connect using their supported transport
- All devices in Plaspy use the same port so enter port 8888 for any supported device

## Typical Requirements Before Setup

- A powered and installed GV75 with access to the installer or the vehicle where the device is mounted
- An active cellular SIM with valid data and the correct APN values for the SIM operator
- Access to the manufacturer supported configuration method such as SMS commands or official QuecLink configuration software
- Knowledge of the device password or factory default password for SMS configuration
- Cellular signal at the installation location to allow GPRS registration and server connection
- A Plaspy account and device provisioning workflow to confirm the device is seen in the platform after configuration

## How This Tracker Connects to Plaspy

The GV75 is configured to report location fixes and device events to the shared Plaspy server endpoint and port. Data is sent over the selected transport method and ingested by Plaspy for mapping, alerts, and reporting.

- The device sends GNSS fixes and telemetry to d.plaspy.com or the server IP 54.85.159.138 on port 8888
- Transport can be TCP or UDP depending on device settings and installer preference
- Plaspy automatically detects the protocol when the device connects so minimal protocol selection is typically required on the platform side
- Events such as SOS, ignition, or digital input changes are forwarded to Plaspy as configured on the GV75
- Buffered messages stored on the device are transmitted to the Plaspy endpoint when cellular coverage is restored

## Common Configuration Workflow

1. Access the official QuecLink configuration method needed for your device such as SMS commands or the manufacturer config tool
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings
3. Set the server port to 8888 which is the shared port used by Plaspy for all supported devices
4. Choose UDP or TCP if the device requires explicit transport selection
5. Configure APN and any required authentication so the device can bring up a GPRS connection
6. Apply or save the configuration and restart the device if required by the firmware
7. Validate that the GV75 reports to Plaspy and that location and event data arrive in the platform

## Example Configuration Commands

The GV75 can be configured by sending SMS commands to the device. The example below is a publicly shared sequence. The sample setup uses the default device password queclink in the commands where a password is required. Treat the restore factory command as an optional initial step only if you need to reset device settings.

- Restore factory settings (optional initial step)
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explanation: keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your SIM operator APN, APN username, and APN password as required by your carrier.

- Set the GPRS server pointing to Plaspy using both domain and IP with port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Set the periodic update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notes on these commands
- Send each command as a separate SMS message to the device phone number
- Replace placeholders such as {{apn}} with values from your cellular provider
- The example uses the default password queclink in each command where required; change the password after initial configuration if the device firmware supports it

## Configuration Notes

- QuecLink firmware versions and hardware revisions can alter exact command syntax and available parameters so check the device manual for your firmware revision
- The GV75 supports SMS based setup as shown in the example commands or alternative manufacturer configuration tools depending on your vendor package
- Choose UDP for lower overhead and typically faster delivery or TCP if the deployment prefers a connection oriented transport keeping in mind Plaspy accepts both
- Always confirm APN values and SIM credentials for the mobile operator before applying GPRS server settings
- After initial setup it is good practice to verify the device appears in Plaspy and transmits expected fixes and events

## Why Use Plaspy with This Configuration

Using the GV75 with Plaspy gives operators a straightforward way to collect real time location and event data from rugged assets. The shared Plaspy server settings and automatic protocol detection simplify device onboarding and let you focus on tuning reporting intervals and event rules for your fleet workflows.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions on the official QuecLink site https://www.queclink.com/ before deploying at scale.
