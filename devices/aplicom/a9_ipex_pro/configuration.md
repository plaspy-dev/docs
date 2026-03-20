---
slug: /aplicom/a9_ipex_pro/configuration
id: a9_ipex_pro-configuration
sidebar_label: Configuration
title: Aplicom - A9 IPEX PRO Configuration
sidebar_class_name: menu_item_tracker
description: Configuration guide for Aplicom A9 IPEX PRO showing Plaspy server settings and practical setup steps for fleet and asset tracking
keywords:
  - Aplicom A9 IPEX PRO configuration
  - Aplicom A9 IPEX PRO setup
  - Aplicom GPS tracker configuration
  - Plaspy compatible tracker configuration
  - Aplicom server configuration
  - A9 IPEX PRO setup Plaspy
  - Aplicom telemetry setup
  - vehicle tracking configuration
  - trailer tracking setup
  - fleet telematics configuration
---

# Aplicom - A9 IPEX PRO Configuration

This page explains the public configuration context for using the Aplicom A9 IPEX PRO with Plaspy. It covers the shared Plaspy server settings you will apply on the device or in Aplicom configuration tools, and provides a practical workflow to prepare the tracker for reliable reporting to Plaspy while remaining mindful of manufacturer variation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the server side. Exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and the vendor configuration tools you use. Refer to Aplicom documentation for device-specific instructions where necessary.

## Configuration Overview

This configuration process prepares the A9 IPEX PRO to send position and telemetry data to Plaspy so assets become visible in the platform. The focus is on configuring the device endpoint, transport, and ensuring the device can reach Plaspy over the cellular network.

- Configure the tracker to report to Plaspy using the shared Plaspy server endpoint and port.
- Select the transport protocol (UDP or TCP) on the device if required by the manufacturer tool.
- Validate network connectivity and that the device successfully registers and reports to Plaspy.
- Enable the necessary telemetry channels such as CAN and digital inputs as required by your deployment.
- Confirm the device is listed and visible in Plaspy after configuration so reporting and event alerts work end to end.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the Aplicom A9 IPEX PRO:

- Server domain d.plaspy.com as the primary endpoint for device reporting
- Server IP 54.85.159.138 as an alternate address if a numeric endpoint is required
- Port 8888 which Plaspy uses for all supported devices
- Transport support: configure the device to use UDP or TCP on port 8888 as needed
- Plaspy automatically detects the tracker protocol so the server can accept reports from common Aplicom protocols

All devices in Plaspy use the same port and the platform will automatically detect the tracker protocol when correctly addressed.

## Typical Requirements Before Setup

- A powered and functional A9 IPEX PRO unit with required cabling and secure installation
- An active SIM card and cellular data plan compatible with the region and device 4G LTE bands
- Access to Aplicom configuration tools such as the A-Series configuration software or the device management method you use
- Knowledge of the device firmware version and any vendor credentials needed to change network/server settings
- Network reachability to d.plaspy.com or 54.85.159.138 from the device cellular network
- Optional: planned telemetry mappings for CAN, digital/analogue inputs, and event reporting relevant to your fleet workflows

## How This Tracker Connects to Plaspy

When configured, the A9 IPEX PRO opens a connection to the shared Plaspy endpoint and transmits GNSS and telemetry data for platform processing. Plaspy collects position reports and telemetry events so your assets are visible and actionable within the Plaspy platform.

- The tracker is set to report to d.plaspy.com or 54.85.159.138 on port 8888
- Choose UDP or TCP on the device if the configurator requires a transport selection; Plaspy accepts both
- The device streams GNSS locations to Plaspy where positions are parsed and displayed
- CAN bus and input state messages are forwarded to Plaspy when those channels are enabled on the device
- Plaspy automatically detects the protocol and associates incoming messages with your tracker account or device identifier

## Common Configuration Workflow

1. Access the official Aplicom configuration method or software such as the A-Series configuration tool or approved vendor utilities. This is the primary step for changing network and server settings.
2. Enter the Plaspy server endpoint in the device settings using either d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. If the device requires a transport choice, select UDP or TCP to match your network preferences.
5. Configure any required identifiers or credentials the platform needs to associate the device with your Plaspy account, following Aplicom tool instructions.
6. Apply or save the configuration and, if required by the tool, restart the device to activate the new settings.
7. Validate connectivity by confirming the tracker reports to Plaspy and appears in the platform dashboard or by checking incoming message logs on the server side.

## Example Configuration Commands

There are no public, device-specific command strings included on this page. Exact configuration commands and the method to apply them vary by Aplicom tool, firmware, and vendor workflow. Use the Aplicom A-Series configuration tool, the device web or USB interface, or the vendor-supplied utilities to set the Plaspy server address to d.plaspy.com or 54.85.159.138 and the port to 8888, and choose UDP or TCP if required.

For device command examples or SMS/serial configuration syntax, consult the official Aplicom configuration guide or your vendor documentation before applying commands.

## Configuration Notes

- Firmware differences can change exact menu names, command syntax, or configuration paths; always check the device firmware version before applying settings.
- Choose UDP or TCP based on installation requirements; both transports are accepted by Plaspy on port 8888 and the server auto-detects protocol specifics.
- For mass deployments, consider using Aplicom remote management and OTA features to push server settings and firmware updates at scale.
- Verify CAN, input and telemetry mappings in the Aplicom tool to ensure the data fields you need are enabled and forwarded to Plaspy.
- Network restrictions from mobile carriers or APN settings may affect connectivity; confirm SIM data service and APN configuration with your operator and the Aplicom tool.

## Why Use Plaspy with This Configuration

Using the Aplicom A9 IPEX PRO with Plaspy gives organizations a durable tracker combined with a backend that accepts standard telematics reports and automatically detects tracker protocols. This pairing supports continuous situational awareness, telemetry collection from CAN and I/O channels, and practical workflows for trailer, heavy equipment, and stationary asset monitoring.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific setup details, firmware behavior, and manufacturer documentation at https://www.aplicom.com/. Manufacturer specifications and setup methods can change over time so confirm the latest information on the Aplicom site before deploying devices.
