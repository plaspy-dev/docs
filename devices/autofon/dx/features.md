---
slug: /autofon/dx/features
id: dx-features
sidebar_label: Features
title: AutoFon - DX Маяк Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the AutoFon DX Маяк GPS tracker and how it works with Plaspy for location monitoring and event reporting
keywords:
  - AutoFon DX Маяк
  - AutoFon DX Mayak features
  - DX Mayak GPS tracker
  - AutoFon GPS tracker features
  - DX Mayak Plaspy compatibility
  - vehicle tracking AutoFon
  - GLONASS GPS tracker AutoFon
  - AutoFon BLE direction finding
  - accelerometer shock detection tracker
  - discreet GPS tracker AutoFon
---

# AutoFon - DX Маяк Features

This page provides a public feature overview of the AutoFon DX Маяк and explains how its capabilities are presented and used within Plaspy. It focuses on practical, non sensitive information about location reporting, event detection, operating modes, and the typical ways the tracker can be integrated into Plaspy monitoring workflows.

Exact feature availability and behavior can vary by device firmware version, hardware revision, installation method, and manufacturer implementation. For precise command syntax, firmware changes, and the latest manufacturer guidance consult the official AutoFon documentation and firmware notes.

## Feature Overview

The AutoFon DX Маяк is designed to provide dependable position reporting and event notifications using satellite navigation and cellular network fallback, combined with low power operating modes and BLE support. In Plaspy the tracker can deliver location updates, movement and shock events, and basic device health indicators for visibility and operational control.

- Accurate GNSS location using GLONASS and GPS for primary position fixes
- Approximate location via cellular base station data when satellite signals are unavailable
- Reporting of coordinates and events over 2G GSM networks using GPRS or via SMS
- Built in accelerometer to detect movement and shocks for anti theft and impact alerts
- Bluetooth BLE functions for smartphone presence detection and BLE direction finding
- Configurable power modes to trade off responsiveness against battery life

## Core Features of AutoFon - DX Маяк

- GLONASS and GPS satellite positioning for precise coordinates and movement tracking
- Cellular base station based approximate positioning as a fallback when satellites are unavailable
- Dual reporting paths: GPRS packets to a monitoring server or SMS messages to chosen phone numbers
- Built in accelerometer to monitor movement and detect shocks and impacts
- Bluetooth BLE for presence tagging with an owner smartphone and for BLE based direction finding
- Two main operating modes: continuous online mode and interval sleep mode with long standby life
- Non volatile black box memory to store unsent GPRS packets until transmission is possible
- Energy consumption meter and basic telemetry such as battery status, temperature, and signal strength

## How These Features Work with Plaspy

Plaspy receives and normalizes the DX Маяк telemetry so location, movement events, and device status are visible in a single monitoring interface. Plaspy automatically detects tracker protocols and accepts reporting from DX Маяк devices configured to send data to the Plaspy monitoring server.

- GNSS coordinates and derived movement (speed and direction) appear on Plaspy maps and track history
- Cellular fallback positions appear as approximate locations when satellite fixes are unavailable
- Movement and shock events reported by the accelerometer are shown as timestamped events for alerts and auditing
- Black box stored packets can be delivered to Plaspy when connectivity is restored, preserving event history
- Device telemetry such as battery level, temperature, and signal strength are available for monitoring device health
- Plaspy supports common configuration flows so devices can be pointed to the Plaspy monitoring endpoint; Plaspy detects the tracker protocol automatically

## Typical Use Cases

- Anti theft monitoring and recovery for cars, motorcycles, and off road vehicles
- Tracking valuable cargo and shipments where discreet installation is required
- Routine fleet and official vehicle tracking for route visibility and event logging
- Personal item and asset tracking for bicycles, small equipment, or portable property
- Location awareness and presence alerts for children, elderly relatives, or domestic animals
- On site device search and local recovery using BLE direction finding together with the AutoFon BLE application

## Feature Availability Notes

- Feature presence and behavior may change with firmware updates and hardware revisions; check firmware release notes for details
- Battery life depends strongly on operating mode, reporting frequency, and whether GNSS is used continuously or intermittently
- BLE functions require the owner smartphone and the AutoFon BLE application for presence detection and direction finding
- GPRS and SMS reporting depend on local 2G GSM network availability and operator support in the deployment region
- Some telemetry fields and notification types must be enabled in device configuration or via the monitoring server to appear in Plaspy

## Why Use Plaspy with These Features

Using the AutoFon DX Маяк with Plaspy centralizes device telemetry, position history, and event notifications into a single monitoring environment. Plaspy's automatic protocol detection and standard monitoring endpoint make it straightforward to receive GPRS or SMS based reports from compatible DX Маяк installations, helping teams maintain visibility and respond to movement or shock events quickly.

Learn more about how Plaspy can help you monitor AutoFon devices at https://www.plaspy.com. For the most current and device specific technical details, firmware information, and manufacturer guidance please verify with the official AutoFon documentation at https://www.autofon.ru/
