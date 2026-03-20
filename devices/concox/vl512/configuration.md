---
slug: /concox/vl512/configuration
id: vl512-configuration
sidebar_label: Configuration
title: Concox - VL512 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Concox VL512 showing Plaspy server settings and SMS commands for quick setup
keywords:
  - Concox VL512 configuration
  - Concox VL512 setup
  - Concox VL512 server configuration
  - VL512 Plaspy setup
  - VL512 GPS tracker configuration
  - Plaspy tracker setup
  - OBDII GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker setup
  - Concox tracker instructions
---

# Concox - VL512 Configuration

This page covers the public configuration context for using the Concox VL512 tracker with Plaspy. It gathers the practical server settings and manufacturer SMS commands that are commonly used to point a VL512 device to Plaspy for real time tracking, event alerts, and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Use the commands and workflow shown here as a practical reference, and confirm the latest details with Concox when needed.

## Configuration Overview

Configuring the VL512 for Plaspy prepares the device to send location and event data to the shared Plaspy server endpoint so it appears in the Plaspy platform for monitoring and reporting. The example commands below are the public, SMS-based commands provided in the manufacturer configuration snippet and demonstrate the typical values you must set for Plaspy integration.

- Set the device APN and GPRS mode so the VL512 can open a data connection to the network.
- Point the device to the Plaspy server domain or IP and the shared port so messages are delivered to Plaspy.
- Configure reporting intervals so the device sends periodic location updates and events to Plaspy.
- Verify and query the device to confirm the GPRS and server parameters were applied.
- Use the official Concox configuration method (SMS commands or vendor tools) to avoid incompatible commands or firmware differences.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888 (this is the same port used by all devices in Plaspy)
- Transport support for UDP or TCP on port 8888
- Plaspy performs automatic protocol detection to identify the tracker protocol when the device connects

## Typical Requirements Before Setup

- Access to the vehicle OBDII port for physical installation and power supply if using the OBDII form factor.
- A nano SIM installed with an active data plan and SMS capability for sending configuration commands where required.
- Carrier APN details (APN, username, password) for the SIM service so you can set the APN on the device.
- Ability to send and receive SMS messages to the device from the administrator phone number used for setup.
- The device powered and reporting battery or OBDII power status so configuration messages take effect.
- Access to official Concox documentation or vendor configuration tools if available for your firmware and region.

## How This Tracker Connects to Plaspy

The VL512 is configured to report its telemetry over the mobile data network to the shared Plaspy server endpoint and port. Plaspy ingests position, event, and state messages and maps the device protocol automatically so the tracker becomes visible in the Plaspy platform without per-device server differences.

- The device uses configured GPRS settings and APN to establish a mobile data session.
- Server configuration instructs the device to send packets to d.plaspy.com or to 54.85.159.138 on port 8888.
- The tracker sends periodic location and event messages at the configured TIMER interval for real time and historical tracking.
- Plaspy handles protocol identification automatically when the device connects to the shared port.
- Transport can be UDP or TCP depending on the device configuration or firmware support; Plaspy accepts both.

## Common Configuration Workflow

1. Access the official Concox configuration method for the VL512 (SMS commands or vendor tool) that matches your device firmware.
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 when setting the SERVER parameter.
3. Set the server port to 8888 as required by Plaspy and ensure the device is set to use UDP or TCP if a transport choice is requested.
4. Configure the APN settings for the installed SIM using the APN command and include username and password if required.
5. Apply or save the configuration using the device method and restart the device if the firmware requires a reboot to activate new settings.
6. Validate that the device reports to Plaspy by checking connectivity and using the verification command shown below or by observing the device in the Plaspy platform.
7. If needed, repeat or adjust settings based on firmware responses, network carrier behavior, or installer requirements.

## Example Configuration Commands

The VL512 supports SMS-based configuration. The following commands are the public commands provided in the Concox configuration snippet. Send each command as an SMS to the device in the order shown for initial setup. Label the factory reset command as optional or for initial setup only.

1. Optional factory reset (use only when you need to restore defaults)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN
- Replace {{apn}} with your carrier APN value.
- If your carrier requires APN username or password, include {{apnu}} and {{apnp}} as provided by your carrier.
```
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
(Example with username and password placeholders kept for clarity: APN,{{apn}},{{apnu}},{{apnp}}#)

4. Set the GPRS server using the Plaspy domain (domain example)
```
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy IP (IP example)
```
SERVER,0,54.85.159.138,8888,0#
```
Note: Either the domain or the IP variant can be used to point the device to Plaspy on port 8888.

5. Set the update interval to every 60 seconds
- Single-parameter variant:
```
TIMER,60#
```
- Two-parameter variant:
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Check current GPRS parameters and server settings
```
GPRSSET#
```

Notes on placeholders:
- {{apn}} is the carrier APN string required for mobile data.
- {{apnu}} is the APN username when required by the carrier.
- {{apnp}} is the APN password when required by the carrier.

These commands reflect the public SMS configuration example from the manufacturer. If your firmware or vendor tool uses a different syntax, prefer the official vendor method for your unit.

## Configuration Notes

- Firmware and regional variants can change the exact SMS syntax or available parameters; always confirm with the Concox documentation for your VL512 firmware.
- The device supports UDP or TCP transport on port 8888; select the transport option required by your deployment or leave default if Plaspy can detect protocol automatically.
- SMS-based configuration is a common and widely supported method for VL512 setup but vendor tools and USB configuration may also be available for your device model and revision.
- Because Plaspy uses the same port for all supported devices and performs automatic protocol detection, you only need to configure the server endpoint and port as shown.
- After configuration, validate connectivity both by using the GPRSSET# verification command and by confirming the device appears and reports in the Plaspy platform.

## Why Use Plaspy with This Configuration

Using the VL512 with Plaspy gives fleet operators a fast, plug-and-play path to real time vehicle visibility and event-driven alerts. The VL512’s OBDII form factor and LTE with GSM fallback combine with Plaspy’s shared server and automatic protocol detection to simplify deployment and reduce per-device server configuration overhead.

Learn more about Plaspy and how the platform can manage devices like the Concox VL512 at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, review the official Concox resources at https://www.iconcox.com/.
