---
slug: /bofan/pt_80/configuration
id: pt_80-configuration
sidebar_label: Configuration
title: Bofan - PT-80 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Bofan PT-80 for use with Plaspy using shared server settings and SMS commands for reliable GPS reporting
keywords:
  - Bofan PT-80 configuration
  - Bofan PT-80 setup
  - Bofan PT-80 Plaspy
  - PT-80 tracker configuration
  - PT-80 SMS setup
  - Plaspy server configuration
  - GPS tracker configuration Bofan
  - personal tracker PT-80 setup
  - PT-80 GPRS configuration
  - Plaspy tracker integration
---

# Bofan - PT-80 Configuration

This page documents the public configuration context for using the Bofan PT-80 personal GPS tracker with Plaspy. It focuses on the server and workflow details you need to point the device to Plaspy so the tracker can report location and events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where available this page shows the PT-80 SMS commands that are commonly used in public documentation to prepare the device for Plaspy.

## Configuration Overview

This configuration process prepares the PT-80 so it can communicate with the Plaspy platform over GPRS. It is primarily about setting the correct server endpoint, ensuring the device has valid mobile connectivity and APN settings, and verifying that the tracker appears in Plaspy.

- Configure the device server address and port so the PT-80 sends data to Plaspy.
- Set APN and data settings so the tracker can use GPRS for reporting.
- Optionally use SMS commands to apply settings directly to the device without additional tools.
- Validate connectivity and confirm the tracker appears in Plaspy for live monitoring.
- Adjust update interval to balance reporting frequency and battery life.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and working PT-80 device with access to its SMS configuration method or manufacturer tool
- An active SIM card with data enabled and correct APN details for your mobile operator
- The device IMEI or other identifier to register or verify the tracker in Plaspy
- Knowledge of the device SMS command password if required by the unit (the public sample uses 000000 as the default)
- Access to the vendor documentation for any firmware or revision specific notes

## How This Tracker Connects to Plaspy

The PT-80 is configured to send its location and alarm messages to the shared Plaspy server endpoint and port so the platform can display and process device updates. Typically the tracker uses GPRS to open a socket to Plaspy and then reports location at the configured interval.

- Device sends GPRS data to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Transport may be either UDP or TCP depending on device selection
- Plaspy receives the incoming connection and automatically detects the tracker protocol
- Reported location and event messages become visible in the Plaspy platform for monitoring and alerts
- Regular update intervals and movement alarms ensure operational visibility

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PT-80 (SMS commands are commonly supported).
2. Enter the Plaspy server address using either d.plaspy.com or 54.85.159.138 in the device server setting.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. If the device requires a transport selection, choose UDP or TCP according to your deployment needs.
5. Set the APN and any required APN username or password for the SIM card to enable GPRS connectivity.
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend it.
7. Validate that the device reports to Plaspy and appears in the platform within a few update intervals.

## Example Configuration Commands

The PT-80 is commonly configured by SMS commands. The public sample commands below use the device default password 000000. Replace placeholders where indicated.

- Default password note
  - The example commands assume the device password is 000000 which is the default in the public sample.

- Factory reset (optional initial step)
  - Use only if you need to reset the device to factory defaults.

```
000000DFT
```

- Set 14 digit identifier used with Plaspy
  - Replace \<last14imei> with the last 14 digits of the device IMEI. Many installations use the last 14 digits of IMEI as the device identifier.

```
000000GID<last14imei>
```

- Set the APN for the mobile operator
  - Preserve the placeholders for APN, APN user, and APN password where applicable. Replace {{apn}} with your operator APN. If you need APN username or password include {{apnu}} and {{apnp}}.

```
000000APN{{apn}}{{,{{apnu}},{{apnp}}}}
```

  - Explanation: send 000000APN followed by your APN. If APN username and password are required include them after the APN separated by commas. The placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your operator values.

- Set the GPRS server to Plaspy using IP and port
  - This command configures the device to send data to Plaspy. Plaspy also accepts the domain d.plaspy.com but the public sample uses the IP.

```
000000SVR54.85.159.138,8888
```

- Set the update interval to 1 minute
  - The value 60 sets reporting interval in seconds. Adjust as needed for battery life and reporting frequency.

```
000000GTI60
```

Note: Maintain the order when you apply these commands if you are performing a clean setup: optionally reset, set identifier, configure APN, set server, then set interval.

## Configuration Notes

- SMS based configuration is available in public documentation for the PT-80; manufacturer tools or software may offer alternative configuration flows.
- Firmware differences and hardware revisions can change command syntax or available features; confirm the exact commands with the vendor documentation before large deployments.
- Choose UDP or TCP based on your deployment needs; Plaspy accepts both and will auto detect the protocol.
- Plaspy uses the same port 8888 for all supported devices which simplifies device provisioning across mixed fleets.
- Always verify APN, SIM data plan status, and signal coverage before concluding a device is offline.

## Why Use Plaspy with This Configuration

Using the PT-80 with Plaspy provides a straightforward path to continuous location visibility and event monitoring. By pointing the tracker to the shared Plaspy server endpoint and port and confirming the device reports correctly, organizations gain access to a centralized platform for real time tracking, alerts, and operational oversight.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration methods and firmware behavior verify details with the manufacturer at https://www.bofancloud.com/ since setup steps and command syntax can change over time.
