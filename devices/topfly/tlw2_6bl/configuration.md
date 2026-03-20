---
slug: /topfly/tlw2_6bl/configuration
id: tlw2_6bl-configuration
sidebar_label: Configuration
title: TopFly - TLW2-6BL Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TopFly TLW2-6BL for Plaspy with server settings, SMS setup commands and practical steps for reliable fleet tracking
keywords:
  - TopFly TLW2-6BL configuration
  - TopFly TLW2-6BL setup
  - TopFly TLW2-6BL Plaspy
  - TLW2-6BL server configuration
  - TLW2-6BL SMS commands
  - TLW2-6BL GPS tracker setup
  - Plaspy tracker configuration
  - vehicle tracker configuration
  - fleet tracking setup
  - GPS platform integration
---

# TopFly - TLW2-6BL Configuration

This page covers the public configuration context for using the TopFly TLW2-6BL tracker with Plaspy. It brings together the Plaspy server settings you must use, the typical prerequisites, and the publicly available SMS configuration commands provided for the TLW2-6BL so you can prepare the device for reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TLW2-6BL is a hardwired 4G LTE vehicle tracker built for professional fleet management and is Plaspy compatible out of the box; this page explains the public, practical steps to point the device at Plaspy and validate connectivity.

## Configuration Overview

The goal of the configuration process is to prepare the TLW2-6BL so it reports GNSS position and telemetry to Plaspy reliably and in a format Plaspy will ingest automatically. Where available, use the manufacturer SMS or provisioning tool to apply the server and APN settings, then verify the device appears in Plaspy.

- Set server endpoint and transport so the tracker can send reports to Plaspy
- Configure APN and GPRS settings so the tracker has cellular data connectivity
- Apply reporting intervals and buffering behavior to match operational needs
- Validate on the Plaspy platform that position and telemetry arrive correctly
- Use the provided SMS commands as a simple manufacturer-supported method to push configuration when available

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the device for either transport if required
- Plaspy automatically detects the tracker protocol so standard telematics payloads are recognized

Note that Plaspy uses the same port for all supported devices and the platform will detect the protocol automatically when the device connects.

## Typical Requirements Before Setup

- A powered TLW2-6BL installed or connected to a bench power source so it can accept configuration
- An active SIM card with data enabled and any required APN credentials for the target mobile network
- Access to the manufacturer's configuration method such as SMS commands or an official provisioning tool
- An SMS capable phone or provisioning interface if using SMS-based configuration as shown below
- Knowledge of the device password when required by commands; the public sample uses the default password 0000
- Access to Plaspy account credentials so you can verify the device reports to the platform after setup

## How This Tracker Connects to Plaspy

When configured, the TLW2-6BL sends GNSS positions and telemetry to the shared Plaspy server endpoint and port. Plaspy ingests the device data, automatically recognizes the protocol, and presents location, events, and buffered uploads in the Plaspy dashboard.

- Device reports are sent to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on device firmware and preference
- Reports include position and telemetry that Plaspy maps to a device record
- Buffered points stored on the device are uploaded to Plaspy when connectivity returns
- Plaspy automatically detects the tracker protocol and processes incoming messages

## Common Configuration Workflow

1. Access the official TopFly configuration method or software for the TLW2-6BL; this can be the manufacturer SMS command set or a provisioning tool from TopFly.
2. Configure the device APN using the operator credentials for your SIM so the tracker can open a data session.
3. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138 as provided.
4. Set the server port to 8888 and choose UDP or TCP if the device requires you to select a transport.
5. Apply or save the configuration on the device and change the default password if required by your security policy.
6. Restart the device if the manufacturer instructions specify a reboot after configuration.
7. Validate that the device reports to Plaspy by checking the device’s incoming messages and location in your Plaspy account.

If you use the SMS commands below, send them in the order shown and confirm each command is accepted by the device before proceeding.

## Example Configuration Commands

The TLW2-6BL manufacturer provides an SMS command set for configuration. The following public commands are examples that can be sent as SMS messages. The sample setup uses the device default password 0000. Keep [apn], [apnu], and [apnp] as placeholders for your network APN, username, and password.

- Set the time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN (replace placeholders with your operator values)
```text
APN,0000,[apn],[apnu],[apnp]#
```
Explanation: [apn] is your carrier APN, [apnu] is the APN username if required, and [apnp] is the APN password if required. If the operator does not require username or password, leave those placeholders blank according to manufacturer SMS syntax.

- Set the GPRS server to Plaspy using the public IP and port
```text
IP,0000,54.85.159.138 8888#
```
Note: The manufacturer sample uses the server IP format. If your device supports hostname configuration, you may also enter d.plaspy.com via the official provisioning method when supported by the device.

- Set reporting interval to 60 seconds
```text
TIMER,0000,60:60:0:0#
```
Explanation: This example sets a periodic update interval; adjust the values per your operational needs and the device manual.

These commands are provided in the public manufacturer documentation and should be sent from an SMS-capable phone or provisioning system to the device’s SIM number. The default password 0000 is shown in the sample commands and should be changed once configuration is confirmed if your deployment requires a nondefault password.

## Configuration Notes

- Manufacturer firmware revisions and region-specific variants may change command syntax or available features; always verify with the TopFly documentation for your device revision.
- SMS-based setup is a common and practical method for initial configuration, especially for hardwired devices in the field, but a provisioning tool may be available for mass deployments.
- Choose UDP or TCP based on your network and reliability requirements; both transports are supported and Plaspy will accept either on port 8888.
- Replace APN placeholders with carrier-specific values; incorrect APN settings will prevent GPRS data sessions and reporting.
- Change the default device password after initial setup if security policies require it.

## Why Use Plaspy with This Configuration

Using the TLW2-6BL with Plaspy provides a straightforward way to bring high-frequency GNSS tracking and vehicle telemetry into a single platform. The device’s buffering capability and configurable reporting make it suitable for fleets that need continuous route reconstruction, anti-theft controls, and sensor integration for cold-chain visibility.

To learn more about Plaspy and how the platform handles device ingestion and tracking, visit https://www.plaspy.com. For the most current device-specific setup details, firmware behavior, and exact SMS command syntax, verify information on the manufacturer website https://www.topflytech.com/ as specifications and commands may change with firmware and hardware revisions.
