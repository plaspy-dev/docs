---
slug: /atrack/as1/configuration
id: as1-configuration
sidebar_label: Configuration
title: ATrack - AS1 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the ATrack AS1 to report to Plaspy with practical server settings and example commands
keywords:
  - ATrack AS1 configuration
  - ATrack AS1 setup
  - AS1 server configuration
  - AS1 Plaspy setup
  - AS1 GPS tracker configuration
  - Plaspy tracker configuration
  - Plaspy server setup
  - vehicle tracking AS1
  - asset tracking AS1
  - ATrack GPS platform setup
---

# ATrack - AS1 Configuration

This page covers the public configuration context for using the ATrack AS1 with Plaspy. It explains the shared Plaspy server settings and the practical steps to bring an AS1 online in the platform while using only public manufacturer information and example commands where available.

Plaspy uses a single, shared server endpoint and port for all supported devices and automatically detects the tracker protocol. Manufacturer setup steps for the AS1 can vary by firmware version, hardware revision, installation method, and vendor tools, so follow the examples here alongside official ATrack documentation and any vendor-supplied configuration utilities.

## Configuration Overview

This section summarizes the practical goals of configuring an AS1 for Plaspy. The objective is to prepare the device to connect to Plaspy, validate its connectivity, and ensure the tracker is visible and reporting correctly in the Plaspy platform.

- Configure the AS1 to send data to the Plaspy server endpoint using the shared server settings.
- Enable periodic reporting and required event reporting so Plaspy receives location and alert updates.
- Validate GPRS or other cellular connectivity and confirm the device can reach Plaspy.
- Verify the device reports correctly in Plaspy and troubleshoot transport selection between UDP and TCP.
- Use manufacturer commands or tools to persist configuration and confirm via status queries.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AS1. Plaspy centralizes device connections and automatically detects tracker protocols.

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 for direct IP configuration
- Port 8888 as the destination port for tracker connections
- Transport support for UDP or TCP depending on device preference
- Plaspy automatically detects the tracker protocol so devices can use either transport and be recognized

Note: All devices in Plaspy use the same port. Configure the AS1 to use port 8888 with either UDP or TCP as appropriate.

## Typical Requirements Before Setup

- A functioning AS1 unit with sufficient battery power or primary battery installed and device powered.
- A valid SIM card with a data plan and GPRS/HSPA or network access required for the device to send data.
- Access to ATrack configuration methods such as SMS commands, a manufacturer configuration tool, or the device console depending on your unit.
- The correct APN settings for your mobile network provider to populate the device APN fields.
- Knowledge of the device firmware version and any vendor-specific install notes that affect command syntax or behavior.
- A way to verify network reachability to the Plaspy server (DNS resolution to d.plaspy.com or ping to the provided IP where allowed).

## How This Tracker Connects to Plaspy

When configured for Plaspy, the AS1 sends location and event data to the shared Plaspy server endpoint and port so the platform can display and manage the device.

- The AS1 is configured to report to the Plaspy server domain or direct IP and the shared port 8888.
- Data transport may use either UDP or TCP depending on the configuration selected at the device.
- The device reports periodic tracking messages and configured event reports so Plaspy receives movement and status updates.
- Plaspy automatically detects the tracker protocol, simplifying cross‑device support and reducing per-device protocol configuration.
- Once the device is successfully sending packets to d.plaspy.com or 54.85.159.138 on port 8888, the device should appear within Plaspy for visibility and monitoring.

## Common Configuration Workflow

Follow this practical workflow to configure an AS1 for Plaspy. Steps assume access to the device configuration method appropriate for your unit.

1. Access the official ATrack configuration method or software (SMS commands, USB/serial tool, or vendor configuration utility).
2. Enter the Plaspy server by domain d.plaspy.com or by the direct server IP 54.85.159.138 in the server settings.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if your device requires a transport selection and save that option.
5. Configure APN and related GPRS settings so the AS1 has cellular data connectivity.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device status in Plaspy and confirming incoming messages from the AS1.

## Example Configuration Commands

The following public example commands come from ATrack AS1 configuration guidance. They are presented in order and demonstrate common settings to prepare the device for Plaspy. Keep placeholders as shown and replace them with your values where appropriate.

1. Configure ACC (ignition) event reporting and actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

2. Set time interval to 60 seconds for tracking reports
```text
AT$TRAC=1,60,,,,,2
```

3. Set the device to binary mode (protocol formatting)
```text
AT$FORM=1,@P,0,""
```

4. Configure GPRS server and APN with Plaspy server IP and port
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
- {{apn}} is your mobile operator APN
- {{apnu}} is APN username if required by your operator
- {{apnp}} is APN password if required by your operator

5. Check device status and information
```text
AT$INFO=?
```

Notes about these commands:
- Replace the APN placeholders with values from your SIM provider.
- The AT$GPRS line points the device to the Plaspy server IP and port. You may alternatively use d.plaspy.com where your configuration tool accepts a domain instead of an IP.
- If your installer or firmware expects TCP vs UDP parameters, choose the appropriate transport as described in the Common Configuration Workflow.

## Configuration Notes

- Firmware differences and hardware revisions can change available command syntax and parameter ordering; always confirm command support for your device firmware version.
- The AS1 supports SMS and command line configuration methods in addition to data based configuration; choose the method that matches your installation and security needs.
- When possible use the domain d.plaspy.com for DNS based resolution; direct IP 54.85.159.138 is provided for environments where DNS is not available.
- Select UDP or TCP based on your network conditions and installation requirements; Plaspy will detect the protocol automatically.
- Keep a record of applied settings and verify reporting after a restart or power cycle.

## Why Use Plaspy with This Configuration

Using Plaspy with the ATrack AS1 provides a practical way to centralize device visibility, event monitoring, and location reporting across fleets or distributed assets. The shared Plaspy server settings simplify onboarding multiple devices because all supported devices use the same port and automatic protocol detection reduces per device protocol troubleshooting.

To learn more about Plaspy visit https://www.plaspy.com and verify manufacturer specific configuration notes, firmware differences, and the latest AS1 documentation at https://www.atrack.com.tw/ to ensure your setup matches current device capabilities and vendor guidance.
