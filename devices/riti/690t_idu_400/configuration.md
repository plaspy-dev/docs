---
slug: /riti/690t_idu_400/configuration
id: 690t_idu_400-configuration
sidebar_label: Configuration
title: Riti - 690T (IDU-400) Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Riti 690T IDU 400 showing Plaspy server settings and practical setup steps for fleet integration
keywords:
  - Riti 690T configuration
  - Riti 690T setup
  - Riti IDU 400 configuration
  - Riti tracker Plaspy
  - GPS tracker configuration
  - vehicle tracking setup
  - tachograph cloud retention
  - telematics configuration
  - fleet tracking setup
  - tracking server configuration
---

# Riti - 690T (IDU-400) Configuration

This page documents the public configuration context for using the Riti Locator 690T (IDU 400) with Plaspy. It focuses on the practical server settings and procedural guidance you will use to point the tracker to Plaspy so the device can upload driving records, high frequency telemetry, and event data for cloud retention and fleet visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Use this guide to prepare the 690T for Plaspy integration and refer to Riti documentation for any device specific instructions or firmware differences.

## Configuration Overview

Before integrating the 690T with Plaspy you will configure the device to send its telemetry and tachograph records to the Plaspy server endpoint and port. The central action is pointing the tracker to Plaspy so the platform receives real time location, driver ID, sensor inputs and recorded trip data.

- Point the 690T at the Plaspy server endpoint d.plaspy.com or the equivalent IP address 54.85.159.138 on the Plaspy port
- Select the transport protocol required by your installation either UDP or TCP if the device requires a choice
- Confirm the device is able to use its cellular connection and has an active data capable SIM for LTE or fallback networks
- Save and apply the device parameters, then validate that data arrives in Plaspy
- Verify that the 690T reports expected tachograph and telemetry samples after configuration and any required reboot

## Plaspy Server Settings

- Server domain name d.plaspy.com for tracker server configuration
- Server IP address 54.85.159.138 as an alternate endpoint option
- Port 8888 used by all devices connecting to Plaspy
- Transport support using either UDP or TCP on port 8888 depending on device preference
- Plaspy automatically detects the tracker protocol so the platform accepts supported protocol variants without per device port changes

## Typical Requirements Before Setup

- Access to the official Riti configuration method or software for the 690T such as the vendor tool, web UI, or configuration utility
- An active data capable SIM and confirmed cellular connectivity if using LTE or fallback networks
- Power to the device and a stable installation state for initial configuration and testing
- Knowledge of the device firmware revision because menu names and parameter locations can vary by firmware
- Administrator access to the fleet account on Plaspy so you can verify device registration and incoming data after setup

## How This Tracker Connects to Plaspy

The 690T is configured to report location, tachograph records, and telemetry to a central Plaspy endpoint so fleet managers can view and retain records in the cloud. Configuration directs the device to the shared Plaspy server and port so Plaspy receives consistent streams from multiple devices.

- The tracker is pointed to d.plaspy.com or 54.85.159.138 as the destination server
- Outgoing traffic is sent on port 8888 which Plaspy uses for all supported devices
- Transport can be configured as UDP or TCP depending on the tracker configuration options
- Plaspy automatically detects the device protocol so the platform interprets incoming messages without needing separate per protocol ports
- Once connected, the 690T sends telemetry and event data for live monitoring, historical replay, and tachograph record retention

## Common Configuration Workflow

1. Access the official Riti configuration method or software for the 690T such as the Riti configuration tool, web UI, or the documented parameter interface.
2. Enter the Plaspy server address using d.plaspy.com or the alternate server IP 54.85.159.138.
3. Set the destination port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP for transport if the device requires a transport selection.
5. Save or apply the configuration on the device via the manufacturer tool.
6. Restart the device if required by the device procedure or firmware to ensure new parameters take effect.
7. Validate that the device reports to Plaspy and that location, tachograph uploads, and telemetry appear in the platform.

## Example Configuration Commands

The exact commands and parameter names used to configure the 690T depend on Riti firmware and the manufacturer configuration utility. Commonly you will set the server host to d.plaspy.com or the alternate IP 54.85.159.138 and the port to 8888, then select UDP or TCP as the transport option. Because Riti provides device specific tools and parameter names vary with firmware, follow the Riti configuration guide for the exact commands or UI steps.

Example conceptual settings to apply in your Riti tool:
- Server host: d.plaspy.com or 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP
- Apply changes and reboot the device if required

If you have access to a command line style interface from Riti or a provisioning script, use the commands and syntax published by Riti for your firmware version and preserve any placeholders provided by the manufacturer.

## Configuration Notes

- Firmware versions and hardware revisions may change the exact parameter labels and menu locations for server, port, and transport settings.
- Choose UDP or TCP according to your network and device behavior; both are supported by Plaspy on port 8888 and Plaspy will detect the tracker protocol automatically.
- For remote deployments use Riti OTA or the vendor provisioning tools where available to reduce field visits for bulk updates.
- Confirm cellular coverage and SIM data plan details before attempting high frequency telemetry uploads to Plaspy.
- When in doubt consult the Riti user manual for the 690T IDU 400 for command syntax, configuration utilities, and provisioning best practices.

## Why Use Plaspy with This Configuration

Using the Riti 690T with Plaspy centralizes high frequency telemetry and tachograph records in a cloud platform designed for audit retention and operational visibility. Plaspy accepts telemetry and event data on a shared endpoint which simplifies fleet scale deployments and reduces per device configuration complexity.

To learn more about Plaspy and supported deployment options visit https://www.plaspy.com. Device specific setup methods, firmware behavior, and manufacturer details can change over time so verify the latest configuration guidance on the manufacturer site at https://www.riti.com.tw/ before performing production deployments.
