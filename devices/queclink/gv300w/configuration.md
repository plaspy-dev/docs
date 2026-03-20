---
slug: /queclink/gv300w/configuration
id: gv300w-configuration
sidebar_label: Configuration
title: QuecLink - GV300W Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure QuecLink GV300W for Plaspy compatibility and server setup
keywords:
  - QuecLink GV300W configuration
  - GV300W setup
  - QuecLink server configuration
  - GV300W Plaspy setup
  - Plaspy GPS tracker configuration
  - vehicle tracker configuration
  - GV300W SMS configuration
  - QuecLink GPRS settings
  - fleet tracking setup
  - GPS tracker server settings
---

# QuecLink - GV300W Configuration

This page covers public configuration context and practical setup guidance for using the QuecLink GV300W tracker with Plaspy. It focuses on the shared Plaspy server settings you will apply to the device and the common steps to verify connectivity. The content draws on manufacturer style SMS commands when available and highlights the values Plaspy expects for immediate integration.

Plaspy uses a shared server endpoint and port for supported devices and automatically detects the tracker protocol to parse incoming data. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the guidance here alongside QuecLink documentation and your provider tools.

## Configuration Overview

The goal of configuration is to prepare the GV300W to deliver location and telemetry to Plaspy reliably. For this model the public configuration process typically uses SMS commands or the manufacturer configuration tool to set APN and server parameters, and to tune reporting intervals and inputs.

- Set the device APN and GPRS parameters so it can use mobile data for TCP or UDP connections.
- Point the tracker to the Plaspy server endpoint so messages are delivered to Plaspy.
- Configure reporting intervals and input behavior so Plaspy receives the events and telemetry you need.
- Validate connectivity and confirm the device appears in Plaspy after applying settings.
- Optionally use a factory restore or initial reset before bulk deployment to ensure a known starting state.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy endpoint settings you will use when configuring the GV300W. Plaspy uses the same port for all supported devices and will attempt to identify the protocol automatically.

## Typical Requirements Before Setup

- A powered and reachable GV300W unit with access to its configuration method (SMS or manufacturer tool).
- An active SIM card installed with a working mobile data plan and correct APN details for the network operator.
- Knowledge of the device password (the sample commands below use the default password queclink).
- Access to SMS sending capability or official QuecLink configuration software for large scale provisioning.
- A plan for testing coverage and reporting intervals to avoid excessive data usage during validation.

## How This Tracker Connects to Plaspy

The GV300W is configured to issue periodic and event-driven reports to the shared Plaspy endpoint and port using the selected transport. Plaspy receives those packets and parses GNSS, I/O and event messages for display and reporting in the platform.

- The device is pointed at d.plaspy.com or the IP 54.85.159.138 and uses port 8888 for data uploads.
- You may choose UDP or TCP transport on the device; Plaspy supports both and auto detects the protocol used.
- Reporting intervals and input-triggered messages cause the tracker to send updates that appear in the Plaspy timeline.
- APN and GPRS server settings must be correct so the GV300W can open data connections to Plaspy.
- SMS may be used for initial configuration commands when supported by the device and installer workflow.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GV300W, either by SMS commands or the vendor configuration tool.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the destination port to 8888.
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure the APN and any APN credentials required by your mobile operator.
6. Apply or save the configuration and perform any required device restart or reboot.
7. Validate that the device reports to Plaspy by checking device connectivity and recent messages in the platform.

If you are provisioning multiple units, perform these steps on a single device first and confirm reporting to Plaspy before mass deployment.

## Example Configuration Commands

The GV300W can be configured via SMS commands. The following public example commands are provided in the manufacturer model configuration. The sample setup uses the default device password queclink. Preserve the placeholders exactly as shown. Send each command as an SMS from an authorized phone number or via your provisioning tool in the order shown when order matters.

- Optional initial factory restore (use only when you need to reset to factory defaults):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC minus 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN and optional credentials (replace placeholders with your operator values):
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation of placeholders
- [apn] is the mobile network Access Point Name for your SIM
- [apnu] is the APN username when required by the operator
- [apnp] is the APN password when required by the operator

- Configure the GPRS server to report to Plaspy. This example points the device to d.plaspy.com and the IP 54.85.159.138 using port 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Set the position update interval to 60 seconds:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use the above commands as examples. Your exact command set or additional parameters may vary by firmware revision and provisioning tool. When using SMS provisioning at scale, consider secure automation and validation steps.

## Configuration Notes

- Firmware differences can change command syntax and available fields. Verify commands against the GV300W firmware version you are using.
- SMS based provisioning is shown above because the public model configuration contains SMS examples. Many installations use queued configuration tools or USB/serial provisioning as an alternative.
- Choose TCP or UDP based on your operational preference and network characteristics; Plaspy accepts both and will detect the protocol automatically.
- Plaspy uses the same port 8888 for all supported devices so ensure that port is used consistently across your fleet.
- Keep the device password secure and, if possible, change default credentials after provisioning to prevent unauthorized changes.

## Why Use Plaspy with This Configuration

Using the GV300W configured to report to Plaspy provides a clear path to real-time visibility, event notification, and operational reporting for fleets and assets. With the device sending GNSS and I/O telemetry to the shared Plaspy endpoint, fleet managers can track location, monitor ignition and alarms, and integrate accessory sensor data for richer telematics insights.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Always verify device specific commands, firmware behavior, and provisioning methods on the official QuecLink site https://www.queclink.com/ since manufacturer setup details and firmware features can change over time.
