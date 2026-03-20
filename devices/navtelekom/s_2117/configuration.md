---
slug: /navtelekom/s_2117/configuration
id: s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Navtelekom СИГНАЛ S 2117 and Plaspy compatibility for fleet tracking
keywords:
  - Navtelekom СИГНАЛ S-2117 configuration
  - Navtelekom S-2117 setup
  - S-2117 Plaspy configuration
  - Navtelekom GPS tracker setup
  - S-2117 server configuration
  - Navtelekom tracker Plaspy
  - S-2117 configuration guide
  - fleet tracker S-2117 setup
  - S-2117 fuel sensor configuration
  - S-2117 temperature sensor
---

# Navtelekom - СИГНАЛ S-2117 Configuration

This page documents the public configuration context for using the Navtelekom СИГНАЛ S-2117 tracker with Plaspy. It collects the practical server and workflow details required to point the device to Plaspy and validate that the tracker appears and reports correctly in the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. Use the guidance below to prepare the S-2117 for Plaspy, and consult vendor documentation for device specific utilities and firmware behaviors.

## Configuration Overview

This configuration process prepares the S-2117 to send location, telemetry, and event data to Plaspy using Plaspy’s shared server endpoint and port. The goal is to register the device with Plaspy by configuring its network target and transport so the platform receives and interprets messages correctly.

- Configure the tracker to report to the Plaspy server endpoint so location and telemetry arrive in the platform.
- Select the transport type (UDP or TCP) if required and set the platform port that Plaspy listens on.
- Validate cellular connectivity and that messages reach the Plaspy endpoint for live updates.
- Confirm the device appears and reports expected telemetry such as alarms, fuel sensor inputs, and temperature if used.
- Save and apply configuration using the official Navtelekom tools and verify behavior in Plaspy dashboards.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the official Navtelekom configuration method or software for the S-2117.
- Device powered and installed according to the manufacturer guidelines so it can register on the cellular network.
- Valid cellular service and any vendor required credentials for remote configuration.
- Access to Plaspy account or administrative ability to validate that the device is visible on the platform after configuration.
- Basic information about the unit such as IMEI or device identifier to match against Plaspy device records.
- If using additional sensors like RS-485 fuel sensors or 1-Wire temperature probes, have those connected and verified on the device side.

## How This Tracker Connects to Plaspy

The S-2117 sends GNSS position and telemetry messages over the GSM link to the configured server endpoint, where Plaspy ingests and decodes the data. Once the device is pointed to Plaspy’s endpoint and the correct port and transport are set, Plaspy will detect the protocol automatically and begin processing messages for dashboards, alerts, and reports.

- The tracker transmits position updates and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP when the device requires explicit transport selection; Plaspy accepts both on the same port.
- Plaspy automatically detects the device protocol and maps incoming messages to the appropriate device record.
- Events such as alarms, tamper signals, fuel sensor readings, and temperature inputs are forwarded into Plaspy for alerting and history.
- Visibility in Plaspy requires the tracker to successfully send at least one valid message to the configured server endpoint.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software for the СИГНАЛ S-2117 (local configurator, vendor tool, or documented SMS commands).
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 as the device target.
3. Set the device port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires explicit transport selection for outbound messages.
5. Apply or save the configuration in the vendor tool and confirm the device accepted the changes.
6. Restart the tracker if required by the vendor tool or firmware to apply network target changes.
7. Validate that the device reports to Plaspy by checking device activity and incoming messages in your Plaspy account.

## Example Configuration Commands

The public model configuration content provided here does not include device specific command strings. Exact configuration commands and their syntax vary by Navtelekom firmware and by the configuration method you use (PC configurator, SMS commands, or vendor service tool). When using manufacturer commands or tools, follow the official Navtelekom instructions to set the server address and port to d.plaspy.com or 54.85.159.138 and port 8888, and choose UDP or TCP as appropriate.

If you have vendor supplied command examples from Navtelekom or an official configurator export, include them in the order required by the vendor tool and preserve any placeholders. Placeholders such as [apn], [apnu], or [apnp] should be kept and replaced with your cellular operator details when required by the device setup.

## Configuration Notes

- Firmware and tool differences can change exact menu names and command formats; always verify the syntax with the current Navtelekom documentation.
- When given the choice, TCP and UDP both work with Plaspy on port 8888. Select the transport that matches your deployment and network reliability needs.
- The S-2117 supports RS-485 and 1-Wire sensors; ensure these sensors are configured on the device side and reported fields are enabled in the vendor setup.
- Discontinued status does not prevent use with Plaspy but may limit access to newer firmware; keep installation copies of any working vendor tools and firmware you rely on.
- Validate each device after configuration by confirming an initial message reaches d.plaspy.com or 54.85.159.138 on port 8888 and is visible in Plaspy.

## Why Use Plaspy with This Configuration

Using the Navtelekom СИГНАЛ S-2117 with Plaspy gives fleet operators centralized visibility of position and rich telemetry such as fuel levels, temperature, and alarm events. Plaspy’s automatic protocol detection and shared server endpoint simplify integration, allowing devices to begin reporting with minimal changes to device-side settings beyond the server target and transport.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer documentation verify details at the Navtelekom site https://www.navtelecom.ru/ as vendor procedures and firmware revisions can change over time.
