---
slug: /ev/ev_206m/configuration
id: ev_206m-configuration
sidebar_label: Configuration
title: EV - EV-206M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EV EV-206M with Plaspy server settings and example SMS commands for device setup
keywords:
  - EV EV-206M configuration
  - EV-206M setup
  - EV GPS tracker configuration
  - Plaspy device setup
  - GPS tracker server configuration
  - pet tracker Plaspy integration
  - EV-206M SMS configuration
  - EV-206M APN setup
  - EV EV-206M tracking configuration
  - Plaspy server configuration
---

# EV - EV-206M Configuration

This page documents the public configuration context for using the EV EV-206M pet GPS tracker with Plaspy. It explains the shared Plaspy server settings you will apply to the device, outlines practical preparation steps, and includes example SMS commands that are publicly published for this model. Use this guide to understand how to point an EV-206M to Plaspy and validate connectivity before adding the device to a Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, or vendor tools, so follow the EV vendor guidance or SMS procedures as provided for this model while relying on the common Plaspy endpoint values shown below.

## Configuration Overview

Preparing an EV-206M for Plaspy is primarily about making sure the tracker can reach the Plaspy endpoint and that any required device-side options are enabled. The public configuration flow for this model commonly uses SMS commands to set timezone, APN, and server information, and some vendor builds require the manufacturer to enable server change operations before you can update the server settings.

- Configure the device APN so the tracker has a working cellular data connection.
- Set the tracker timezone so timestamps are accurate in Plaspy.
- Update the tracker server settings to point to Plaspy so location and telemetry are delivered.
- Validate transport selection (UDP or TCP) if the device requires a choice.
- Confirm the device reports successfully to Plaspy and appears in your account.
- If required, coordinate with the manufacturer to enable the server change option.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port so you should set port 8888 for this device as well

## Typical Requirements Before Setup

- A charged EV-206M with an active SIM card and a data plan that supports device uplink
- Ability to send SMS commands to the tracker or access to the vendor configuration app or tool
- The APN, and if required APN username and APN password for the cellular operator
- Knowledge of the tracker default password for SMS commands; public documentation for this model shows 123456 as the device default password
- Access to vendor support to enable server change on units that restrict server configuration by default
- A Plaspy account prepared to receive the device once it reports successfully

## How This Tracker Connects to Plaspy

The EV-206M sends location fixes and activity telemetry to the Plaspy server endpoint so data appears in Plaspy dashboards, alerts, and historical timelines. For Plaspy the device must be pointed at the shared server host or IP and the common port so the platform can ingest messages and automatically detect the correct protocol.

- The tracker is configured to report to the shared Plaspy server endpoint and port
- Messages are sent over UDP or TCP on port 8888 depending on device or operator configuration
- Plaspy automatically detects the tracker protocol and ingests position and event data
- Once connected, location, activity, and home aware events are visible in Plaspy
- Validation of successful reporting confirms the tracker is visible and sending telemetry to Plaspy

## Common Configuration Workflow

1. Access the official EV configuration method for the EV-206M such as the vendor app, SMS command interface, or vendor support channel to perform setup.
2. Enter the Plaspy server address by using either the domain d.plaspy.com or the IP 54.85.159.138 as your server value.
3. Set the port to 8888 which is the common Plaspy port used for all devices.
4. Choose UDP or TCP transport if the tracker requires a transport selection.
5. Apply or save the configuration through the selected vendor method or by sending the appropriate SMS commands.
6. Restart the device if recommended by the vendor or configuration tool to apply server and network settings.
7. Validate that the EV-206M reports to Plaspy by checking device presence and recent telemetry in your Plaspy account.

## Example Configuration Commands

The EV public documentation for the EV-206M provides SMS style commands used to configure several settings. The device default SMS password published for these commands is 123456. Commands are shown below as sent by SMS to the device.

- Set the timezone to UTC 0
```text
123456L+00
```

- Set the operator APN
  - Basic APN only
```text
123456S1,[apn]
```
  - APN with username and password placeholders
```text
123456S1,[apn],[apnu],[apnp]
```
  - Explanation: keep the placeholders [apn], [apnu], and [apnp] and replace them with your operator APN, APN username, and APN password as required

- Set the server IP and port
  - The public command sample requires the manufacturer to enable the option to change server on some units
```text
123456I1,54.85.159.138,8888
```
  - Note: This example uses the Plaspy server IP and the shared port 8888. You may alternatively point the device at d.plaspy.com if the device accepts a domain rather than an IP, subject to vendor support.

Important notes on these commands
- The device password 123456 is the publicly documented default for the EV-206M SMS configuration flow; consult the vendor for steps to change the password.
- Some EV units require manufacturer-side enablement before server change commands will succeed. Contact EV support if the server change command is rejected.
- Send each command as a separate SMS to the tracker and follow vendor guidance on confirmation messages.

## Configuration Notes

- Firmware differences and hardware revisions may change the exact SMS syntax or available commands; always verify the commands against the device documentation.
- The EV-206M supports SMS-based configuration as shown, and vendor apps or tools may offer GUI alternatives for APN and server settings.
- Choose UDP or TCP based on operator reliability and device capability; Plaspy supports both transports on port 8888 and auto detects protocol on connect.
- If the device rejects server changes, coordinate with the manufacturer to enable the server modification option before attempting to point the tracker at Plaspy.
- Ensure APN settings are correct and that the SIM card has data enabled so the tracker can establish a session and send uplink messages to Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the EV-206M centralizes pet location, activity telemetry, and home-aware events into a single monitoring platform. This combination allows owners and operators to receive near real-time updates, configure alerts, and review location history without needing to manage a custom server environment, because Plaspy exposes a shared endpoint and handles protocol detection for supported devices.

To learn more about Plaspy and how to integrate trackers like the EV-206M visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and manufacturer guidance verify current information at the EV official site http://www.eviewltd.com/ as vendor setup steps and firmware behavior can change over time.
