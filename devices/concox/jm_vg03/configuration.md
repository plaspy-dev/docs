---
slug: /concox/jm_vg03/configuration
id: jm_vg03-configuration
sidebar_label: Configuration
title: Concox - JM-VG03 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox JM-VG03 for Plaspy with public server settings and SMS commands
keywords:
  - Concox JM-VG03
  - JM-VG03 configuration
  - Concox configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - server configuration Plaspy
  - vehicle tracking setup
  - tracker SMS commands
  - GPRS APN settings
  - tracker installation guide
---

# Concox - JM-VG03 Configuration

This page documents the public configuration context for using the Concox JM-VG03 GPS tracker with Plaspy. It gathers the shared server settings and the commonly used SMS configuration commands published for the JM-VG03 so you can prepare the device to report to Plaspy. Use this guidance together with the device documentation from the manufacturer for the full installation and safety steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The JM-VG03 can be configured by SMS commands as shown below; depending on your device and firmware you may also use an official configuration tool from the vendor.

## Configuration Overview

This configuration process prepares the JM-VG03 to communicate reliably with Plaspy by applying APN and server settings, enabling GPRS reporting, and validating connectivity. The goal is to get the tracker sending position and event data to the shared Plaspy endpoint so the device becomes visible and manageable within the platform.

- Set operator APN and GPRS connection parameters so the device can access mobile data.
- Point the device to the Plaspy server endpoint using the public server settings.
- Enable periodic reporting so location updates arrive at the platform on a predictable schedule.
- Verify configuration using the vendor verification command and confirm the device appears in Plaspy.
- Keep a note of placeholders like APN credentials to adapt commands for your mobile operator.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible JM-VG03 unit with the required wiring and mounting completed.
- A working SIM card installed with an active data plan and the correct APN for your operator.
- Access to an SMS-capable phone or other manufacturer-specified configuration tool to send commands.
- The APN, and when required APN username and password, for your mobile operator.
- The official Concox documentation or configuration guide for your device firmware and hardware revision.
- Physical access to the device to restart it after configuration if needed.

## How This Tracker Connects to Plaspy

When configured, the JM-VG03 reports location and event data to Plaspy using standard GPRS connections pointed at the shared platform endpoint. Plaspy receives those reports on the common port and determines the correct protocol automatically so devices appear in the platform without per-device server variations.

- The tracker uses the configured APN to establish a GPRS data session.
- It is set to send reports to d.plaspy.com or 54.85.159.138 on port 8888.
- You may select UDP or TCP as the transport depending on the device option; Plaspy accepts either.
- Plaspy automatically detects the device protocol when messages arrive on the shared port.
- Once reporting begins, location and event messages become visible in the Plaspy platform for monitoring and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software or prepare to use SMS commands as documented by Concox.
2. Enter the Plaspy server address either as d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the operator APN and any APN username or password required by the SIM card.
6. Apply or save the configuration and enable GPRS or data reporting on the device.
7. Restart the device if required by the vendor procedure.
8. Validate that the device reports to Plaspy and appears in the platform.

## Example Configuration Commands

The JM-VG03 can be configured by sending SMS messages to the device. The following public commands are presented in the order they appear in the vendor guidance. Label the reset command as optional or for initial setup when appropriate.

1. Optional initial factory reset (use only if you need to restore device defaults)
```
FACTORY#
```

2. Set the time zone to UTC 0
```
GMT,E,0#
```

3. Set the operator APN (replace placeholders as needed)
```
APN,{{apn}}{{,{{apnu}},{{apnp}}}}#
```
- Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown. Use the APN alone if no username or password is required. If your SIM operator needs an APN username and password, include {{apnu}} and {{apnp}} respectively.

4. Set the GPRS server to Plaspy by domain (preferred readable form)
```
SERVER,1,d.plaspy.com,8888,0#
```

   Or set the GPRS server by IP
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the periodic update interval to every 60 seconds (two common forms shown)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

6. Enable GPRS mode
```
GPRSON,1#
```

7. Verify GPRS parameters and server settings
```
GPRSSET#
```

Follow the commands in the order that matches your installation needs. If you change the APN or server, resend the relevant SERVER and APN commands and then enable GPRS and restart the device if necessary.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available features; always cross-check with the Concox documentation for your exact device version.
- Choose TCP or UDP according to installer preference; Plaspy accepts both and detects the protocol automatically on the shared port.
- SMS-based configuration is a common public method for this model; some installers may use vendor tools or USB/serial utilities instead.
- Preserve APN placeholders and replace them with your mobile operator values when sending commands.
- After applying server and APN settings, restart or power cycle the device if the vendor guide recommends it to ensure settings take effect.

## Why Use Plaspy with This Configuration

Configuring the Concox JM-VG03 to report to Plaspy gives organizations centralized visibility into vehicle location and status using the platform's shared server endpoint. Using the documented server settings and the JM-VG03 SMS commands makes it practical to deploy devices across a fleet and have them report consistently to the same Plaspy endpoint.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific setup details, firmware behaviors, and command syntax with the manufacturer at https://www.iconcox.com/ as specifications and procedures may change over time.
