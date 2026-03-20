---
slug: /queclink/gb100/configuration
id: gb100-configuration
sidebar_label: Configuration
title: QuecLink - GB100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for QuecLink GB100 setup with Plaspy using shared server settings and SMS commands when available
keywords:
  - QuecLink GB100 configuration
  - QuecLink GB100 setup Plaspy
  - GB100 GPS tracker configuration
  - Plaspy server configuration
  - vehicle tracker setup
  - GB100 SMS commands
  - GB100 TCP UDP configuration
  - fleet tracking device setup
  - GPS platform integration Plaspy
  - QuecLink device configuration
---

# QuecLink - GB100 Configuration

This page documents the public configuration context for using the QuecLink GB100 tracker with Plaspy. It summarizes the practical server settings, the typical setup workflow, and example SMS commands publicly shared for GB100 devices where SMS configuration is supported. Use this guide to prepare the device for reporting to Plaspy and to understand the key steps before full integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, and the vendor configuration tools you choose. The example commands below reflect publicly available SMS command syntax and preserve placeholders and the device default password supplied in that public content.

## Configuration Overview

The goal of configuration is to ensure the GB100 can reliably deliver position and telemetry data to Plaspy and be visible in the platform. For GB100 devices this typically means using the manufacturer configuration channel you have available, supplying network APN details, and pointing the device to Plaspy server settings so the tracker can establish a data connection.

- Prepare the device power and network access so it can register on the mobile network and receive configuration.
- Configure APN and GPRS parameters so the GB100 can open a data session for TCP or UDP.
- Point the device to the Plaspy server endpoint so telemetry is sent to the shared Plaspy backend.
- Validate that the device reports regularly and that telemetry appears in Plaspy dashboards.
- Optionally enable event inputs such as SOS reporting or accelerometer alerts needed for your use case.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy so the platform detects the tracker protocol on connection

These exact values are the public Plaspy settings to use when configuring the GB100 for live reporting.

## Typical Requirements Before Setup

- A charged and powered GB100 device installed or temporarily powered for configuration.
- An active SIM card with data enabled and the correct APN details for the mobile operator.
- Access to the GB100 configuration method you will use such as SMS commands, manufacturer software, or an MDM tool.
- Knowledge of the device password where required; the public example commands use the default password queclink.
- A way to receive device confirmation messages such as SMS responses or connectivity logs.
- The Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888 available from your network for outbound connections.

## How This Tracker Connects to Plaspy

The GB100 reports position and telemetry to the Plaspy endpoint using GPRS data sessions or via SMS fallbacks when configured that way. Once configured with Plaspy server information the tracker establishes a connection to the shared Plaspy endpoint and begins sending regular updates and event messages that the platform ingests and uses for dashboards and alerts.

- The device is given the Plaspy server domain or IP and port so it can open outbound TCP or UDP connections.
- Plaspy uses the same port for all supported devices so the GB100 is configured to use port 8888.
- The tracker can send periodic location messages and event reports to Plaspy for real time visibility.
- If SMS configuration or SMS fallbacks are used, critical alerts may be sent by SMS in coverage edge cases.
- Plaspy automatically detects the tracker protocol when the device connects so explicit protocol selection is frequently unnecessary on the platform side.

## Common Configuration Workflow

1. Access the official QuecLink configuration method you have available such as SMS commands or the vendor configuration tool.
2. Supply or confirm the device password; public SMS examples use the default password queclink.
3. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138.
4. Set the destination port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure the device APN and operator settings using the correct {{apn}}, {{apnu}}, and {{apnp}} placeholders for your operator.
6. Apply or save the configuration and restart the device when required by the vendor procedure.
7. Validate the device reports to Plaspy by checking connectivity logs or the platform for incoming telemetry.

## Example Configuration Commands

The GB100 can be configured by SMS using AT style commands. The following example sequence is taken from public configuration content. The sample commands use the device password queclink which is shown as the default in that public content. The first command resets configuration and is optional or used for initial setup when you want a known baseline.

1. Optional initial factory restore
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} is the mobile data APN name for your SIM.
- {{apnu}} is the APN username if required by the operator; leave blank if not needed.
- {{apnp}} is the APN password if required by the operator; leave blank if not needed.

4. Set the GPRS server to Plaspy using both domain and IP examples and the port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Send each SMS command to the device number and wait for any confirmation reply. Modify placeholders and parameters to match your deployment needs and operator details.

## Configuration Notes

- SMS based configuration is supported in the public examples shown here, but manufacturer tools or over the air methods may also be available; choose the method that fits your workflow.
- Firmware and hardware revisions can change the exact command syntax and parameter order; always verify the command set against current QuecLink documentation when possible.
- You may choose UDP or TCP transport on the GB100; Plaspy accepts either and the platform will detect the tracker protocol automatically when the device connects.
- Plaspy uses the same port 8888 for all devices in its public configuration, so ensure that outbound traffic to port 8888 is allowed on your mobile and network path.
- If you perform a factory restore as an initial step, note that this may erase other custom settings so apply necessary parameters again afterwards.

## Why Use Plaspy with This Configuration

Using the GB100 with Plaspy provides a practical path for organizations that need real time location, driver behavior telemetry, and event alerts in a single platform. The GB100's telemetry combined with Plaspy's device protocol detection and shared server endpoint simplifies large scale rollouts by standardizing the server settings and reducing per device configuration overhead.

Learn more about Plaspy and how it supports device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and detailed technical specifications always verify setup and command reference information on the official QuecLink website https://www.queclink.com/ as manufacturer methods and firmware may change over time.
