---
slug: /queclink/gl100m/configuration
id: gl100m-configuration
sidebar_label: Configuration
title: QuecLink - GL100M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GL100M showing Plaspy server settings SMS commands and practical setup steps
keywords:
  - QuecLink GL100M configuration
  - QuecLink GL100M setup
  - GL100M server configuration
  - GL100M Plaspy setup
  - QuecLink GPS tracker configuration
  - vehicle tracking setup
  - GPS tracker server settings
  - tracking platform configuration
  - QuecLink configuration guide
  - Plaspy tracker setup
---

# QuecLink - GL100M Configuration

This page documents the public configuration context for using the QuecLink GL100M tracker with Plaspy. It consolidates the Plaspy server settings you must apply, explains the typical setup workflow, and presents example SMS configuration commands that are commonly used for this model. Use this guide to prepare a GL100M device so it can communicate with Plaspy for location reporting and event notifications.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GL100M supports GPRS/GSM reporting and SMS configuration using its embedded @Track protocol, so this guide focuses on the practical, public steps that align with those capabilities while encouraging verification against QuecLink documentation.

## Configuration Overview

Configuring a GL100M for Plaspy means preparing the tracker to register and send its position and events to the Plaspy backend endpoint. Typical configuration sets the mobile data APN, the server endpoint and port, reporting intervals, and any event inputs such as SOS. For the GL100M this is often done via SMS commands or the manufacturer configuration tool.

- Set the device APN and GPRS login so the tracker can use mobile data to reach Plaspy.
- Point the tracker to the Plaspy server endpoint (d.plaspy.com or the Plaspy server IP) and set port 8888.
- Select UDP or TCP transport on the device if required; Plaspy accepts both and detects the tracker protocol automatically.
- Configure periodic position reporting and event inputs so the device sends timely data to Plaspy.
- Validate connectivity so the device appears online and reporting in the Plaspy platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the correct protocol will be handled server side

## Typical Requirements Before Setup

- A GL100M device with power and basic installation completed.
- An active SIM card with mobile data enabled and the correct APN credentials for the network operator.
- Ability to send SMS commands to the device or access to the official QuecLink configuration software or tool.
- Knowledge of the device password if it has been changed from the factory default.
- Cellular network coverage where the device will operate and the SIM is provisioned.
- Optionally, a way to view device responses or logs to confirm commands were accepted.

## How This Tracker Connects to Plaspy

The GL100M is commonly configured to send position reports and event notifications via the GPRS/GSM network to the Plaspy server endpoint and port. When pointed to Plaspy, the device will use its configured protocol and transport to establish sessions and deliver telemetry. Plaspy’s server uses the shared endpoint and automatic protocol detection to receive data from supported trackers.

- The tracker is configured to report to the shared Plaspy endpoint d.plaspy.com or the IP 54.85.159.138.
- All devices use port 8888 on Plaspy; configure the GL100M to use port 8888 for its GPRS server settings.
- The device can be set to use UDP or TCP; Plaspy accepts either and detects the correct protocol automatically.
- Location updates, scheduled reports, and event alerts (for example SOS or input triggers) are sent to Plaspy for visibility and monitoring.
- Using the correct APN and GPRS credentials ensures the device can reach the Plaspy server over the mobile data connection.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL100M (SMS commands or the manufacturer configuration tool).
2. Configure the device APN and GPRS credentials (use your operator APN) so the tracker has data connectivity.
3. Enter the Plaspy server endpoint by adding d.plaspy.com or the server IP 54.85.159.138 in the GPRS server settings.
4. Set the server port to 8888 as required for Plaspy connections.
5. Choose the transport protocol (UDP or TCP) if the device requires selection; Plaspy supports both and auto detects protocol.
6. Apply or save the configuration and restart the device if the device or tool requires a reboot.
7. Validate that the GL100M reports to Plaspy and appears online in the platform by checking incoming position or event messages.

## Example Configuration Commands

The GL100M can be configured by sending SMS commands. The sample commands below reflect a typical public setup sequence. The sample setup uses the factory default device password queclink. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator values.

1. Optional initial step — restore factory settings (optional when you need a clean configuration)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your operator values)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = mobile network APN
- {{apnu}} = APN username if required by operator
- {{apnp}} = APN password if required by operator

4. Set the GPRS server to Plaspy using the domain and IP with port 8888
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- This command points the device to the Plaspy server endpoint and port 8888. The command includes both domain and IP as provided in public configuration examples.

5. Set the periodic update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

These commands are examples drawn from publicly available configuration samples for the GL100M. Preserve the device password and change it as appropriate after setup.

## Configuration Notes

- The exact SMS syntax and available parameters can vary by GL100M firmware version and factory settings; always confirm with the device response or official QuecLink documentation.
- You can configure the GL100M by SMS or with QuecLink configuration software where available; choose the method supported by your deployment and firmware.
- When choosing UDP versus TCP, note that Plaspy accepts both on port 8888 and detects the protocol automatically; pick the transport that fits your network and device behavior.
- Replace APN placeholders {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator credentials; missing or incorrect APN settings will prevent GPRS connectivity.
- If the device uses a factory default password (for example queclink in this public example), change it after successful configuration to secure the device.

## Why Use Plaspy with This Configuration

Using Plaspy with a properly configured QuecLink GL100M gives organizations a practical way to centralize location visibility, event monitoring, and operational oversight. Pointing the device to Plaspy’s shared endpoint ensures consistent handling of position reports and alerts, while automatic protocol detection reduces manual protocol selection during integration.

To learn more about Plaspy and how it supports tracker integrations visit https://www.plaspy.com. For the latest device specific configuration methods firmware behavior and official command references always verify details with the manufacturer at https://www.queclink.com/
