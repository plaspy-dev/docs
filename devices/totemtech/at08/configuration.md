---
slug: /totemtech/at08/configuration
id: at08-configuration
sidebar_label: Configuration
title: Totemtech - AT08 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Totemtech AT08 showing Plaspy server settings and SMS commands for basic setup
keywords:
  - Totemtech AT08 configuration
  - Totemtech AT08 setup
  - AT08 server configuration
  - AT08 Plaspy setup
  - Totemtech GPS tracker configuration
  - AT08 SMS configuration commands
  - AT08 GPRS server setup
  - Plaspy tracker configuration
  - GPS tracker platform setup
  - asset tracking AT08
---

# Totemtech - AT08 Configuration

This page documents the public configuration context for using the Totemtech AT08 magnetic GPS tracker with Plaspy. It explains the shared server settings Plaspy expects and shows the common SMS configuration commands published for the AT08 so you can prepare a device to report into the Plaspy platform.

Plaspy uses the same shared server endpoint and port across supported devices and automatically detects the device protocol once packets arrive. Manufacturer setup steps for the AT08 can vary by firmware, hardware revision, installation type, and vendor tools, so use the commands below as practical public guidance and verify any device specific steps with Totemtech documentation.

## Configuration Overview

This configuration process prepares an AT08 to send location and telemetry to Plaspy by setting the APN, GPRS server endpoint and reporting parameters. The public SMS commands for this model allow rapid provisioning if SMS or SIM based configuration is preferred.

- Configure the cellular APN and credentials so the tracker can open a data session.
- Point the tracker to Plaspy using the shared server domain or IP and the standard Plaspy port.
- Choose the transport option (UDP or TCP) if the device requires a transport selection.
- Set reporting intervals and acknowledgement behaviour to suit your operational needs.
- Validate connectivity so the device is visible in Plaspy and reporting location and telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com for device reporting and protocol detection
- Server IP 54.85.159.138 as an alternate endpoint option
- All devices use port 8888 for reporting into Plaspy
- Transport support: configure the device to use UDP or TCP depending on device capabilities
- Plaspy automatically detects the tracker protocol when device packets reach the server

## Typical Requirements Before Setup

- A charged AT08 with battery or power available and the device powered on
- A working SIM card with a data plan and SMS capability and correct APN credentials
- Access to the official Totemtech configuration method such as SMS provisioning, USB, or vendor software
- Knowledge of the device password if it has been changed; default password shown in commands below is 000000
- A test environment or temporary deployment to confirm the device successfully reports to d.plaspy.com or 54.85.159.138 on port 8888
- Manufacturer documentation or vendor support contact for firmware specific instructions

## How This Tracker Connects to Plaspy

When configured, the AT08 sends GNSS coordinates and device telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests those packets, identifies the device protocol automatically, and makes location and telemetry visible in platform dashboards.

- The tracker is configured to report to the Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138 on port 8888
- Location updates and device telemetry are sent over TCP or UDP depending on the transport selected
- Plaspy automatically detects the protocol and maps incoming packets to the device record
- Telemetry such as battery level, signal status and motion events are forwarded to Plaspy for alerts and reporting
- Successful setup enables real time visibility and historical tracking in Plaspy

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AT08 (SMS provisioning, micro USB tools, or vendor portal).
2. Ensure the device has a working SIM and enter the correct APN credentials using the device method.
3. Enter the Plaspy server as d.plaspy.com or use the alternative IP 54.85.159.138 in the server field.
4. Set port 8888 for server communication.
5. Choose UDP or TCP if the device requires a transport selection during provisioning.
6. Apply or save the configuration and, if required, restart the tracker to apply settings.
7. Validate that the device reports to Plaspy by checking visibility in the platform after the tracker registers with d.plaspy.com on port 8888.

## Example Configuration Commands

The AT08 can be configured by sending SMS commands. The sample commands below use the default device password 000000. Preserve the placeholders {{apn}}, {{apnu}}, and {{apnp}} when you replace them with your operator values.

- Optional factory reset (use only when needed as an initial reset)
```text
*000000,007#
```

- Set the operator APN and credentials
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explanation: replace {{apn}} with your carrier APN, {{apnu}} with APN username if required, and {{apnp}} with APN password if required. If your operator does not require username or password, leave placeholders empty according to device SMS rules.

- Set the GPRS server to Plaspy using the Plaspy server IP and port
```text
*000000,003,54.85.159.138,8888,1
```
Note: this command points the device at the Plaspy server IP and port 8888. You can also configure d.plaspy.com in devices that accept a domain name instead of an IP.

- Enable ACK behaviour
```text
*000000,019,1#
```

- Set the update interval example to 60 seconds
```text
*000000,60,60,0,60#
```
Preserve the order of commands if your provisioning process needs an APN set before enabling GPRS reporting to Plaspy.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or available SMS parameters; confirm the exact command set with Totemtech documentation for your device firmware.
- Both SMS based setup and data channel provisioning are public methods for this model; choose the method supported by your installation and operator.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so use port 8888 when you configure the AT08.
- When choosing transport, TCP or UDP are both supported; select the transport required by your deployment or follow vendor advice.
- After configuration, test the device in a controlled environment to confirm it registers with d.plaspy.com or 54.85.159.138 and is visible in the Plaspy platform.

## Why Use Plaspy with This Configuration

Using the Totemtech AT08 with Plaspy provides a practical path to continuous asset visibility and operational monitoring. The AT08’s long battery life and flexible provisioning options make it well suited for long duration asset tracking while Plaspy ingests location and telemetry for alerts, geofencing and historical reports.

Learn more about Plaspy at https://www.plaspy.com. Device specific setup methods and firmware behavior can change over time, so verify the latest configuration details and command syntax with the manufacturer at http://www.totemtek.com/ before large scale deployment.
